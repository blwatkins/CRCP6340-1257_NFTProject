/*
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import p5 from 'p5';

import { Random } from './random';

const random = Random.random;

import '../assets/style/sketch.css';

function sketch(ctx: p5): void {
    const squares: { x: number; y: number; r: number; g: number; b: number; s: number }[] = [];
    const circles: { x: number; y: number; r: number; g: number; b: number; s: number }[] = [];

    let circlesTotal;
    let squaresTotal;

    ctx.setup = (): void => {
        const size: number = Math.min(window.innerWidth, window.innerHeight);
        ctx.createCanvas(size, size);

        squaresTotal = Math.floor(random(1, 25));

        for (let i = 0; i < squaresTotal; i++) {
            squares.push({
                x: random(0, ctx.width),
                y: random(0, ctx.height),
                r: Math.floor(random(0, 255)),
                g: Math.floor(random(0, 255)),
                b: Math.floor(random(0, 255)),
                s: random(25, 100)
            });
        }

        circlesTotal = Math.floor(random(1, 25));

        for (let i = 0; i < circlesTotal; i++) {
            circles.push({
                x: random(0, ctx.width),
                y: random(0, ctx.height),
                r: Math.floor(random(0, 255)),
                g: Math.floor(random(0, 255)),
                b: Math.floor(random(0, 255)),
                s: random(25, 100)
            });
        }
    };

    ctx.draw = (): void => {
        ctx.background(0);

        squares.forEach((square) => {
            ctx.rectMode(ctx.CENTER);
            ctx.noStroke();
            ctx.fill(square.r, square.g, square.b);
            ctx.rect(square.x, square.y, square.s, square.s);
        });

        circles.forEach((circle) => {
            ctx.stroke(circle.r, circle.g, circle.b);
            ctx.strokeWeight(5);
            ctx.noFill();
            ctx.ellipse(circle.x, circle.y, circle.s, circle.s);
        });
    };
}

new p5(sketch);
