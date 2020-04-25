import React from 'react';

function Footer() {
    return (
        <div>
            <svg class="waves overflow-hidden bg-gray-800" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(45,55,72,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(45,55,72,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(45,55,72,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(247,250,252)" />
                </g>
            </svg>
            <div class="text-center text-xs mx-auto mt-2 bg-gray-100">Made with <span role="img" aria-label="heart">🧡</span> in India</div>
        </div>
    )

}

export default Footer;