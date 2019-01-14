import * as React from 'react';
import Particles from 'react-particles-js';
import './index.css'
// tslint:disable:no-console
interface IfpsState {
    particles: number
}

// tslint:disable:object-literal-sort-keys
export default class extends React.Component<{}, IfpsState> {
    private mounted: boolean = true
    constructor(props: {}) {
        super(props)
        this.state = ({
            particles: 100
        })
    }

    public componentWillMount() {
        this.checkPerformance();
        this.configParticleAmount();
    }

    public componentWillUnmount() {
        this.mounted = false
    }

    public render() {
        return <div id='particle-js'><Particles params={{
            fps_limit: 60,
            particles: {
                number: {
                    value: this.state.particles,
                    density: {
                        enable: false, value_area: 394.57382081613633
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "star",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 0.3447335930860874,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 56.03332764879281,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4, width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8, speed: 3
                    },
                    repulse: {
                        distance: 111.8881118881119,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        }} />
        </div>
    }

    private checkPerformance() {
        const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
        let lastTimestamp: number = 0
        let overallDelay: number = 0
        let requestedChecks: number = 0
        const check = (timestamp: number) => {
            const extraMillisecondDelay = timestamp - lastTimestamp
            lastTimestamp = timestamp
            requestedChecks = requestedChecks + 1
            if (requestedChecks > 5) {
                overallDelay = overallDelay + extraMillisecondDelay
            }
            if (requestedChecks % 10 === 0) {
                const averageDelay = overallDelay / (requestedChecks - 5) - 1000
                const particleJSconfig = {
                    averageDelay,
                    particleAmount: this.state.particles
                }
                localStorage.setItem('particleJS', JSON.stringify(particleJSconfig))
            }
            if (this.mounted) {
                setTimeout(() => requestAnimationFrame(check), 1000)
            }
        }
        requestAnimationFrame(check)
    }

    private configParticleAmount() {
        const get = localStorage.getItem('particleJS');
        if (get) {
            const particleJSconfig = JSON.parse(get);
            switch (true) {
                case particleJSconfig.averageDelay < 20 && particleJSconfig.particleAmount < 500:
                    this.setState({ particles: particleJSconfig.particleAmount + 50 })
                    break
                case particleJSconfig.averageDelay <= 40:
                    this.setState({ particles: particleJSconfig.particleAmount })
                    break
                case particleJSconfig.averageDelay >= 80:
                    this.setState({ particles: particleJSconfig.particleAmount - 100 })
                    break;
                case particleJSconfig.averageDelay > 40:
                    this.setState({ particles: particleJSconfig.particleAmount - 50 })
                    break

            }
        }
    }
}