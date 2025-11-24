'use client';

import React, { useEffect, useRef, memo } from 'react';

/**
 * React-komponent för Stripe Gradient Animation
 * 
 * @param {Object} props
 * @param {string[]} props.colors - Array med hex-färger (minst 3 färger)
 * @param {string} props.width - Bredd på canvas (default: '100%')
 * @param {string} props.height - Höjd på canvas (default: '600px')
 * @param {boolean} props.wireframe - Visa wireframe för debug (default: false)
 * @param {number[]} props.density - Densitet för mesh [x, y] (default: [0.06, 0.16])
 * @param {number} props.angle - Vinkel för lutning i radianer (default: 0)
 * @param {number} props.amplitude - Amplitud för vågor (default: 320)
 * @param {boolean} props.static - Statisk gradient utan animation (default: false)
 * @param {string} props.className - CSS-klasser för canvas-elementet
 * @param {string} props.loadedClass - CSS-klass att lägga till när laddad (default: 'is-loaded')
 * @param {React.CSSProperties} props.style - Inline-stilar för canvas-elementet
 */
const StripeGradient = memo(({
    colors = ['#a960ee', '#ff333d', '#90e0ff', '#ffcb57'],
    width = '100%',
    height = '600px',
    wireframe = false,
    density = [0.06, 0.16],
    angle = 0,
    amplitude = 320,
    static: isStatic = false,
    className = '',
    loadedClass = 'is-loaded',
    style = {}
}) => {
    const canvasRef = useRef(null);
    const gradientInstanceRef = useRef(null);

    useEffect(() => {
        // Kontrollera att Gradient-klassen finns (laddas från stripe-gradient.js)
        if (typeof window.Gradient === 'undefined') {
            console.error('Stripe Gradient: Gradient-klassen är inte tillgänglig. Se till att stripe-gradient.js är laddad.');
            return;
        }

        // Kontrollera att canvas finns
        if (!canvasRef.current) {
            return;
        }

        // Om det redan finns en instans, behåll den (förhindra återskapning)
        if (gradientInstanceRef.current) {
            return;
        }

        // Skapa Gradient-instans endast en gång vid mount
        try {
            const gradientInstance = new window.Gradient({
                canvas: canvasRef.current,
                colors: colors,
                wireframe: wireframe,
                density: density,
                angle: angle,
                amplitude: amplitude,
                static: isStatic,
                loadedClass: loadedClass
            });

            gradientInstanceRef.current = gradientInstance;

            // Cleanup-funktion - körs bara vid unmount
            return () => {
                if (gradientInstanceRef.current) {
                    // Disconnect event listeners och stoppa animation
                    if (typeof gradientInstanceRef.current.disconnect === 'function') {
                        gradientInstanceRef.current.disconnect();
                    }
                    // Pausa animation
                    if (typeof gradientInstanceRef.current.pause === 'function') {
                        gradientInstanceRef.current.pause();
                    }
                    gradientInstanceRef.current = null;
                }
            };
        } catch (error) {
            console.error('Stripe Gradient: Fel vid initiering:', error);
        }
        // Inte inkludera props i dependencies - skapa bara en gång vid mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Kör bara en gång vid mount - aldrig återskapa

    // Hantera resize
    useEffect(() => {
        const handleResize = () => {
            if (gradientInstanceRef.current && typeof gradientInstanceRef.current.resize === 'function') {
                gradientInstanceRef.current.resize();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{
                width: width,
                height: height,
                display: 'block',
                ...style
            }}
        />
    );
}, (prevProps, nextProps) => {
    // Jämför props för att förhindra onödiga re-renders
    // Jämför arrays genom att kontrollera längd och innehåll
    const colorsEqual = 
        prevProps.colors.length === nextProps.colors.length &&
        prevProps.colors.every((color, i) => color === nextProps.colors[i]);
    
    const densityEqual = 
        Array.isArray(prevProps.density) && Array.isArray(nextProps.density) &&
        prevProps.density.length === nextProps.density.length &&
        prevProps.density.every((val, i) => val === nextProps.density[i]);

    return (
        colorsEqual &&
        densityEqual &&
        prevProps.width === nextProps.width &&
        prevProps.height === nextProps.height &&
        prevProps.wireframe === nextProps.wireframe &&
        prevProps.angle === nextProps.angle &&
        prevProps.amplitude === nextProps.amplitude &&
        prevProps.static === nextProps.static &&
        prevProps.className === nextProps.className &&
        prevProps.loadedClass === nextProps.loadedClass
    );
});

StripeGradient.displayName = 'StripeGradient';

export default StripeGradient;

