import * as React from 'react';
import { BrowserView } from 'react-device-detect';
import './index.css'

export default class extends React.Component {
    private rotating: boolean
    constructor(props: {}) {
        super(props);
        this.rotating = false
        this.mouseMove = this.mouseMove.bind(this)
    }

    public render() {
        const fill: number[] = Array(12).fill(1)
        return (
            <BrowserView>
                <div>
                    {fill.map((el: number, i: number) => {
                        return <div key={"trail-" + i} className="mouseTrail" id={'mouseTrail' + i}>&#9733;</div>
                    })}
                </div>
            </BrowserView>
        )
    }

    public componentDidMount() {
        window.addEventListener('mousemove', this.mouseMove)
    }

    public componentWillUnmount() {
        window.removeEventListener('mousemove', this.mouseMove)
    }

    private mouseMove(evt: MouseEvent) {

        const
            mouseX = evt.clientX,
            mouseY = evt.clientY
        const printDot = (i: number) => {
            const dot = document.getElementById('mouseTrail' + i)
            if (dot) {
                dot.style.left = String(mouseX + 'px')
                dot.style.top = String(mouseY + 'px')
                dot.style.opacity = String(1 / i)
                if (i < 12) {
                    setTimeout(() => printDot(i + 1), 30)
                }
            }
        }
        printDot(0)
        if (!this.rotating) {
            this.rotateStars()
        }
    }

    private rotateStars() {
        const rotate = (rotation: number = 0) => {
            for (let i: number = 0; i < 12; i++) {
                const dot = document.getElementById('mouseTrail' + i)
                if (dot) {
                    dot.style.transform = `rotate(${rotation}deg)`;
                }
            }
            if (rotation < 360) {
                setTimeout(() => rotate(rotation + 20), 20)
            } else {
                this.rotating = false
            }
        }
        rotate(0)
        this.rotating = true
    }
}