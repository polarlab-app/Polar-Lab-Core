'use client';
import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesNameWasTaken() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: '#000000',
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: 'push',
                    },
                    onHover: {
                        enable: false,
                        mode: 'grab',
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    grab: {
                        distance: 200,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                },
            },
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                    },
                },
                color: {
                    value: '#ffffff',
                },
                shape: {
                    type: 'circle',
                },
                opacity: {
                    value: 0.4,
                },
                size: {
                    value: 2,
                },
                links: {
                    enable: true,
                    distance: 130,
                    color: '#ffffff',
                    opacity: 0.7,
                    width: 1,
                    triangles: {
                        enable: true,
                        opacity: 0.1,
                    },
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: 'none',
                    random: false,
                    straight: false,
                    outMode: 'out',
                    bounce: false,
                },
            },
            detectRetina: true,
        }),
        []
    );

    if (init) {
        return <Particles id='tsparticles' options={options} />;
    }

    return <></>;
}
