import React from "react";
import { CricketGradient, cricketGradientId } from './Cricket';
import { Link } from "react-router-dom";

function modNumber(original: number, scroll: number) {
  return (original + scroll) % 255
}

function Room(props: { scroll: number }) {
  return (
    <svg
      className="align-top"
      style={{ height: 'auto', width: 'auto', minHeight: '80vh' }}
      xmlns="http://www.w3.org/2000/svg"
      width="1728"
      height="1507"
      fill="none"
      viewBox="0 0 1728 1507"
    >
      <g clipPath="url(#clip0_24_7)">
        <path fill="#fff" d="M0 0H1728V1507H0z"></path>
        <path
          stroke="#000"
          d="M-2 1191l495-495m0 0V-1m0 697h736.5V180h286v516H1727"
        ></path>
        <path
          fill="#fff"
          d="M575.134 787H467V588l66.866-64H642v199l-66.866 64z"
        ></path>
        <path
          stroke="#000"
          d="M575.134 787H467V588m108.134 199V588m0 199L642 723V524m-66.866 64l-5.224 5h-97.686m102.91-5l59.553-57m-162.463 62L467 588m5.224 5L537 531m-70 57l66.866-64M642 524H533.866M642 524l-7.313 7m-100.821-7l3.134 7m0 0h97.687"
        ></path>
        <path stroke="#000" d="M474.813 599.5H567.843V688.5H474.813z"></path>
        <path stroke="#000" d="M474.813 692.5H567.843V781.5H474.813z"></path>
        <path stroke="#000" d="M503.022 643.5H539.634V647.5H503.022z"></path>
        <path stroke="#000" d="M503.022 734.5H539.634V738.5H503.022z"></path>
        <path
          fill="#fff"
          d="M730 466.5h452v13l-133 133H597.5v-13l132.5-133z"
        ></path>
        <path
          stroke="#000"
          d="M597.5 599.5H1049m-451.5 0l132.5-133h452m-584.5 133v13H1049m0-13l133-133m-133 133v13m133-146v13l-133 133M626.5 791.5h25m-25 0l67-67h25m-92 67l4.5 4.5h22m-1.5-4.5l67-67m-67 67l1.5 4.5m65.5-71.5v6.5L653 796"
        ></path>
        <path fill="#fff" d="M672.5 752.5v-140h24v126l-14 14h-10z"></path>
        <path
          stroke="#000"
          d="M682.5 752.5h-10v-140h10m0 140v-140m0 140l14-14v-126h-14M1016 791h25m-25 0l67-67h25m-92 67l4.5 4.5h22m-1.5-4.5l67-67m-67 67l1.5 4.5M1108 724v6.5l-65.5 65"
        ></path>
        <path
          fill="#fff"
          d="M1062 752V600l10-10 14-14.5V738l-14 14h-10z"
        ></path>
        <path
          stroke="#000"
          d="M1072 752h-10V600l10-10m0 162V590m0 162l14-14V575.5l-14 14.5"
        ></path>
        <Link to="/photos">
          <path fill="#000" d="M1234 184H1510V696H1234z"></path>
          <text fill="#fff" x="1339" y="430" style={{ fontFamily: 'ui-monospace'}}>ENTER</text>
        </Link>
        <path fill="#fff" d="M832.5 94.5H1101.5V335.5H832.5z"></path>
        <path fill="#000" d="M832.5 94.5H1101.5V335.5H832.5z"></path>
        <path stroke="#000" d="M832.5 94.5H1101.5V335.5H832.5z"></path>
        <path fill="#fff" d="M838.5 99.5H1095.5V330.5H838.5z"></path>
        <path fill="#fff" d="M838.5 99.5H1095.5V330.5H838.5z"></path>
        <path stroke="#000" d="M838.5 99.5H1095.5V330.5H838.5z"></path>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth="18"
          d="M875 134h74a8 8 0 018 8v6.601a8 8 0 01-8 8h-66a8 8 0 00-8 8v7.056a8 8 0 008 8h66a8 8 0 018 8v6.509a8 8 0 01-8 8h-66a8 8 0 00-8 8v6.963a8 8 0 008 8h66a8 8 0 018 8V240a8 8 0 01-8 8h-66a8 8 0 00-8 8v6.5a8 8 0 008 8h66a8 8 0 018 8v6.5a8 8 0 01-8 8h-74M1061 134h-74a8 8 0 00-8 8v6.601a8 8 0 008 8h66a8 8 0 018 8v7.056a8 8 0 01-8 8h-66a8 8 0 00-8 8v6.509a8 8 0 008 8h66a8 8 0 018 8v6.963a8 8 0 01-8 8h-66a8 8 0 00-8 8V240a8 8 0 008 8h66a8 8 0 018 8v6.5a8 8 0 01-8 8h-66a8 8 0 00-8 8v6.5a8 8 0 008 8h74"
        ></path>
        <circle cx="981" cy="306" r="3" fill="#000"></circle>
        <path
          fill="#fff"
          stroke="#000"
          d="M684 436.655v81.993c0 2.944 3.05 4.9 5.715 3.65 14.149-6.637 51.83-23.999 81.785-34.974 31.873-11.678 72.493-19.731 84.205-21.927a4.034 4.034 0 003.295-3.963v-82.66c0-2.49-2.242-4.367-4.685-3.894-13.17 2.55-51.778 10.538-85.815 22.65-36.238 12.896-73.149 30.995-82.333 35.585-1.345.672-2.167 2.037-2.167 3.54z"
        ></path>
        <path
          fill="#000"
          stroke="#000"
          d="M687 436.5v83s48-23 84.25-35.75S855.5 462 855.5 462v-83s-48 9-88.25 22.75S687 436.5 687 436.5z"
        ></path>
        <path
          stroke="#000"
          d="M767.5 495v-6l5-1.5 3 3.5 29-1 3.5 2-34.5 3-25.5 21.5V513l19.5-18z"
        ></path>
        <mask id="path-25-inside-1_24_7" fill="#fff">
          <path
            fillRule="evenodd"
            d="M1202.9 646.079v89.842c0 6.671-18.78 12.079-41.95 12.079s-41.95-5.408-41.95-12.079v-89.842c0-6.671 18.78-12.079 41.95-12.079s41.95 5.408 41.95 12.079z"
            clipRule="evenodd"
          ></path>
        </mask>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M1202.9 646.079v89.842c0 6.671-18.78 12.079-41.95 12.079s-41.95-5.408-41.95-12.079v-89.842c0-6.671 18.78-12.079 41.95-12.079s41.95 5.408 41.95 12.079z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#000"
          d="M1201.9 646.079v89.842h2v-89.842h-2zM1160.95 749c11.65 0 22.24-1.359 29.94-3.577 3.85-1.107 7.03-2.445 9.28-3.974 2.21-1.506 3.73-3.357 3.73-5.528h-2c0 1.164-.83 2.491-2.86 3.875-2 1.361-4.96 2.626-8.7 3.705-7.48 2.154-17.87 3.499-29.39 3.499v2zM1118 735.921c0 2.171 1.52 4.022 3.73 5.528 2.25 1.529 5.43 2.867 9.28 3.974 7.7 2.218 18.29 3.577 29.94 3.577v-2c-11.52 0-21.91-1.345-29.39-3.499-3.74-1.079-6.7-2.344-8.7-3.705-2.03-1.384-2.86-2.711-2.86-3.875h-2zm2 0v-89.842h-2v89.842h2zM1160.95 633c-11.65 0-22.24 1.359-29.94 3.577-3.85 1.107-7.03 2.445-9.28 3.974-2.21 1.506-3.73 3.357-3.73 5.528h2c0-1.164.83-2.491 2.86-3.875 2-1.361 4.96-2.626 8.7-3.705 7.48-2.154 17.87-3.499 29.39-3.499v-2zm42.95 13.079c0-2.171-1.52-4.022-3.73-5.528-2.25-1.529-5.43-2.867-9.28-3.974-7.7-2.218-18.29-3.577-29.94-3.577v2c11.52 0 21.91 1.345 29.39 3.499 3.74 1.079 6.7 2.344 8.7 3.705 2.03 1.384 2.86 2.711 2.86 3.875h2z"
          mask="url(#path-25-inside-1_24_7)"
        ></path>
        <path
          fill="#fff"
          stroke="#000"
          d="M1202.5 646c0 1.403-1 2.851-3.08 4.257-2.06 1.394-5.08 2.669-8.86 3.748-7.54 2.155-17.99 3.495-29.56 3.495s-22.02-1.34-29.56-3.495c-3.78-1.079-6.8-2.354-8.86-3.748-2.08-1.406-3.08-2.854-3.08-4.257 0-1.403 1-2.851 3.08-4.257 2.06-1.394 5.08-2.669 8.86-3.748 7.54-2.155 17.99-3.495 29.56-3.495s22.02 1.34 29.56 3.495c3.78 1.079 6.8 2.354 8.86 3.748 2.08 1.406 3.08 2.854 3.08 4.257z"
        ></path>
        <path
          stroke="#000"
          d="M1202 656c0 6.627-18.36 12-41 12s-41-5.373-41-12"
        ></path>
        <path
          fill="#fff"
          d="M1148.8 741h18.2v6.247l-2.83 4.753H1146v-3.247l2.8-7.753z"
        ></path>
        <path
          stroke="#000"
          d="M1146 748.753h18.17m-18.17 0l2.8-7.753h18.2m-21 7.753V752h18.17m0-3.247L1167 741m-2.83 7.753V752m2.83-11v6.247l-2.83 4.753M1054.33 1289.5l81.5-166s3-2.5 4.5-3 3.5-.5 3.5-.5h414s4.5 0 7 3.5m-510.5 166s-1.5 6 0 8.5 2.5 3.5 6 5 426 0 426 0 1.5 0 3.5-1.5m-435.5-12s-1.5 4.5-2 8.5-.5 9.5.5 15 5 10 7.5 11 12 1 12 1h423.5s5-.5 7-2m-13-21.5c2-1.5 4-4.5 4-4.5l73-166.5s.5-3.5-2-7m-75 178s3.95 3.5 8.5 10 4.5 11.5 4.5 11.5m62-199.5s10.5 18 11.5 20 1.5 3.5 1.5 5-1.5 6-1.5 6l-70 164s-1.5 3-3.5 4.5"
        ></path>
        <path
          fill="#fff"
          stroke="#000"
          d="M1181.66 1141.5h328.78c6.92 0 11.52 7.15 8.65 13.44l-56.14 123a9.486 9.486 0 01-8.64 5.56h-335.03c-7.08 0-11.67-7.48-8.47-13.8l62.37-123c1.62-3.19 4.9-5.2 8.48-5.2z"
        ></path>
        <path
          fill="#fff"
          d="M503 560.134v-108.25s0-14.106 15.557-19.663c1.904-.68 4.04-1.232 6.438-1.615l42.647-8.097c3.059-.871 6.689-1.421 10.999-1.5 22.068-.403 22.336 12.856 23.161 18l.198 101-49 44.5h-31.76l-11.072-10.922a20.32 20.32 0 01-2.876-2.838C503 565.565 503 560.134 503 560.134z"
        ></path>
        <path
          stroke="#000"
          d="M563.083 451.884v108.25s0 19.875-30.041 19.875c-14.337 0-21.832-4.527-25.75-9.26m55.791-118.865s0-21.875-30.041-21.875c-2.966 0-5.638.213-8.047.597m38.088 21.278l38.719-12.875m-94.51 131.74C503 565.565 503 560.134 503 560.134v-108.25s0-14.106 15.557-19.663c1.904-.68 4.04-1.232 6.438-1.615m-17.703 140.143l13.948 13.76H553l49-44.5-.198-101m0 0c-.825-5.144-1.093-18.403-23.161-18-4.31.079-7.94.629-10.999 1.5l-42.647 8.097"
        ></path>
        <path
          stroke="#000"
          d="M508.365 555.88v-98.741s0-18.13 24.677-18.13 24.677 18.13 24.677 18.13v98.741s0 18.129-24.677 18.129-24.677-18.129-24.677-18.129z"
        ></path>
        <path
          stroke="#000"
          d="M527.677 546.196v-79.268s0-7.919 5.365-7.919c5.364 0 5.364 7.919 5.364 7.919v79.268s0 6.813-5.364 6.813c-5.365 0-5.365-6.813-5.365-6.813z"
        ></path>
        <path
          stroke="#000"
          d="M526 547.897v-82.641s0-8.256 7-8.256 7 8.256 7 8.256v82.641s0 7.103-7 7.103-7-7.103-7-7.103z"
        ></path>
        <path
          stroke="#000"
          d="M533.042 467.009c-3.219 0-3.219 3-3.219 4s1.073 5 3.219 5 3.218-4 3.218-5 0-4-3.218-4z"
        ></path>
        <path
          stroke="#000"
          d="M531.969 470.009v.883a.27.27 0 00.085.197v0a.268.268 0 00.451-.197v-.883M534.651 470.009v.883a.27.27 0 01-.085.197v0a.268.268 0 01-.451-.197v-.883"
        ></path>
        <ellipse
          cx="550.208"
          cy="485.009"
          fill="#000"
          rx="1.073"
          ry="1"
        ></ellipse>
        <path fill="#000" d="M549.135 494.009H551.281V498.009H549.135z"></path>
        <path fill="#000" d="M549.135 494.009H551.281V498.009H549.135z"></path>
        <path fill="#000" d="M549.135 494.009H551.281V498.009H549.135z"></path>
        <path fill="#000" d="M549.135 489.009H551.281V493.009H549.135z"></path>
        <path fill="#000" d="M549.135 489.009H551.281V493.009H549.135z"></path>
        <path fill="#000" d="M549.135 489.009H551.281V493.009H549.135z"></path>
        <path fill="#000" d="M549.135 499.009H551.281V503.009H549.135z"></path>
        <path fill="#000" d="M549.135 499.009H551.281V503.009H549.135z"></path>
        <path fill="#000" d="M549.135 499.009H551.281V503.009H549.135z"></path>
        <path fill="#000" d="M896 439H988V497H896z"></path>
        <path
          stroke="#000"
          d="M894.5 499.5V437h95v62.5m-95 0h95m-95 0l-24.5 34m119.5-34l-25.5 34m25.5-34v3L964 536m-94-2.5h94m-94 0v2.5h94m0-2.5v2.5M890 514.04l-4 4.96h10.188M890 514.04l4.25-5.27m-4.25 5.27l81.46-.155m-77.21-5.115l4.25-5.27h10.125m-14.375 5.27h81.17m0 0l4.08-5.27h-10.125m6.045 5.27l-3.96 5.115m0 0L967.5 519h-10.188m-30.562 0h-10.188m10.188 0h10.188m-10.188 0L939 503.5M906.375 519h10.187m-10.187 0h-10.187m10.187 0l12.375-15.5m-2.188 15.5h-20.374m20.374 0l12.313-15.5M896.188 519l12.437-15.5m38.5 15.5h-10.187m10.187 0h10.187m-10.187 0l12.125-15.5M936.938 519l12.187-15.5m8.187 15.5l12.063-15.5m-30.375 0h10.125m-10.125 0h-10.125m30.375 0h-10.125m10.125 0h10.125m-20.25 0h20.25m-50.625 0h10.125m-10.125 0h-10.125M942 521.5h-33l-7.5 9h34l6.5-9zM807.5 874.188c0 2.73-2.422 5.014-5.5 5.014s-5.5-2.284-5.5-5.014c0-2.731 2.422-5.015 5.5-5.015s5.5 2.284 5.5 5.015z"
        ></path>
        <path
          fill="#fff"
          d="M764 781.86s-5-91.453-21.5-138.329C726 596.656 726 531.857 726 531.857s2.612-2.799 5-3.676c3-1.379 70.5-4.596 95-4.136 24.5.459 90 5.462 90 5.462 1.41-.023 3.066.117 5 .512 9 1.838 10 7.812 10 7.812v66.178s3.315 10.57 6.408 22.059C940.5 637.557 944 698.5 944 698.5l7.178-14.683a2.998 2.998 0 012.695-1.682h14.877c2.236 0 3.686 2.357 2.678 4.353l-1.284 2.54.3 23.897h3.184c2.372 0 4.372 0 4.372 2.298v17.004l-7.556 10.57-4.407 6.434L944 781.86H764z"
        ></path>
        <path
          stroke="#000"
          d="M726 531.857s0 64.799 16.5 111.674C759 690.407 764 781.86 764 781.86h180M726 531.857s52-4.596 91.5-4.596 91.5 4.596 91.5 4.596m-183 0s2.612-2.799 5-3.676c3-1.379 70.5-4.596 95-4.136 24.5.459 90 5.462 90 5.462m-7 2.35s-.404 57.905 14.798 105.7c5.902 18.556 10.479 48.7 13.61 73.443M909 531.857s1.849-2.266 7-2.35m28 252.353l22.037-32.629M944 781.86s-1.199-23.151-4.209-52.39m30.353-40.442l1.284-2.54c1.008-1.996-.442-4.353-2.678-4.353h-14.877a2.998 2.998 0 00-2.695 1.682L944 698.5m26.144-9.472l-4.644 7.353m4.644-7.353l.3 23.897m0 29.872l7.556-10.57v-17.004c0-2.298-2-2.298-4.372-2.298m-3.184 29.872l-4.407 6.434m4.407-6.434v-27.574m-4.944-18.842l.437 16.544m-.437-16.544l-9.979 16.544m10.516 36.306l-.1-25.736m7.691-10.57c-2.372 0-3.184 2.298-3.184 2.298m3.184-2.298h-3.184m0 2.298v-2.298m-4.507 10.57L948 760.26l-1.805-31.71m19.742-5.055v-10.57m-19.742 15.625s-1.195.92-2.195.92h-4.209m6.404-.92l9.326-15.625M944 698.5s-3.5-60.943-6.592-72.432c-3.093-11.489-6.408-22.059-6.408-22.059v-66.178s-1-5.974-10-7.812c-1.934-.395-3.59-.535-5-.512M944 698.5l-6.592 12.5m28.529 1.925h-10.416M937.408 711l-7.186 14.108c-1.017 1.996.432 4.362 2.672 4.362h6.897"
        ></path>
        <path
          fill="#fff"
          d="M864.307 798.18h3.938v32.419l37.128-10.806h5.063l1.125 5.661-.563.161s1.125 1.382 1.125 2.926v3.088h-1.125v2.573h-4.5v-2.573h-1.125v-3.088c0-.922.2-1.269.362-1.399l-30.74 11.691 43.316 19.554v9.263s1.688 1.544 1.688 4.117v4.631h-1.688V880h-6.225v-3.602h-1.65v-4.631c0-2.573 1.65-4.117 1.65-4.117l-45.529-20.595v2.584s-4.557 1.111-9.564 1.029c-5.006-.081-10.493-1.029-10.493-1.029l-39.867 19.281 1.867 1.591v1.379s-2.5-1.379-5.5-1.379-4.5 2.298-4.5 2.298h-5s.5-1.838 2-3.217 3.188-1.832 3.188-1.832v-7.314l47.054-22.128-.843-2.315-23.346-13.122v4.631h-1.688v3.602h-5.625v-3.602h-1.688v-4.117c0-2.058 3.518-3.602 3.518-3.602l-1.83-1.029v-6.69h2.813l27.002 11.321V798.18h3.938v-15.905h16.314v15.905z"
        ></path>
        <path
          stroke="#000"
          d="M864.307 798.18h-16.314m16.314 0h3.938m-3.938 0v-15.905h-16.314v15.905m0 0h20.252m-20.252 0h-3.938v25.215m24.19-25.215v32.419m-69.557 29.847h7.188m-7.188 0v7.314m0-7.314l47.054-22.128-.843-2.315m-39.023 33.301v-8.858m0 8.858h-7.188v-1.544m7.188 1.544l.757-.384m-.757-8.474l42.117-19.347m-49.305 26.661s-1.688.453-3.188 1.832c-1.5 1.379-2 3.217-2 3.217h5s1.5-2.298 4.5-2.298 5.5 1.379 5.5 1.379v-1.379l-1.867-1.591m108.865-8.474l-48.941-22.128.937-2.573m48.004 24.701v8.748m0-8.748l2.813-2.059m-2.813 10.807l2.813-1.544m-2.813 1.544l-3.412-1.544m-47.779-21.613l2.25 1.018m0 0v2.584s-4.557 1.111-9.564 1.029c-5.006-.081-10.493-1.029-10.493-1.029m20.057-2.584l45.529 20.595M850.5 847.993s-2.422.945-4 1.646m71.811 8.748v9.263m0-9.263l-43.316-19.554m43.316 28.817s1.688 1.544 1.688 4.117v4.631h-1.688m-50.817-40.653l.751-2.058v-.515m-.751 2.573l7.501 3.088m37.091 28.817s-1.65 1.544-1.65 4.117v4.631h1.65m0 0V880h6.225v-3.602m-6.225 0h6.225m-43.316-37.565l30.94-11.767m4.501-7.273l1.125 5.661-.563.161m-.562-5.822l-42.191 13.379m42.191-13.379h-5.063l-37.128 10.806m0 2.573v-2.573m42.753-4.984s1.125 1.382 1.125 2.926v3.088h-1.125m0-6.014l-5.063 1.451m0 0s-.562-.069-.562 1.475v3.088h1.125m0 0v2.573h4.5v-2.573m-4.5 0h4.5m-96.758-19.555v6.69l1.83 1.029m-1.83-7.719h2.813l27.002 11.321m-29.815-11.321l29.815 13.894m0 0v-2.573m0 2.573v7.719l.844 2.316m0 0l-23.346-13.122m-5.483-3.088s-3.518 1.544-3.518 3.602v4.117h1.688m1.83-7.719l5.483 3.088m0 0v4.631h-1.688m-5.625 0v3.602h5.625v-3.602m-5.625 0h5.625m26.635 22.127l-39.867 19.281"
        ></path>
        <path
          fill={`url(#${cricketGradientId})`}
          d="M1362.99 1256.58l-1.84-14.64a4 4 0 00-2.96-3.37l-.28-.08c-.2-.05-.41-.09-.62-.11l-2.85-.28-4.25-.77-3.42-.73c-.2-.04-.41-.07-.61-.08l-3.22-.19c-.45-.03-.9-.13-1.32-.3l-1.68-.71c-.61-.26-1.14-.65-1.55-1.16l-2.22-2.71-2.34-3.51-1.85-2.41c-.29-.39-.65-.72-1.07-.97l-2.69-1.67c-.34-.21-.71-.36-1.09-.46l-2.62-.69-2.68-.87-1.67-.7c-.32-.13-.67-.23-1.02-.27l-1.72-.23a5.22 5.22 0 00-.79-.03l-.65.05-2.61.17-1.96.13c-.43.03-.85.13-1.25.29l-.67.27c-.17.08-.34.16-.51.26l-1.02.6c-.49.29-1.05.46-1.62.49-.79.06-1.58-.15-2.24-.58l-.93-.61c-.16-.1-.31-.21-.45-.34l-.55-.48c-.59-.52-1.33-.85-2.11-.95l-.72-.1a3.88 3.88 0 00-1.44.08l-1.8.42c-.39.09-.76.24-1.1.44l-1.5.88-.54.41c-.62.48-1.38.77-2.17.82l-1.53.1c-.26.02-.52.01-.78-.02l-2.26-.3-1.14-.2c-.64-.12-1.31-.08-1.93.12l-1.1.36-.55.22c-.61.25-1.06.8-1.17 1.45-.12.67.12 1.35.63 1.8l.12.11c.11.09.21.2.3.32l.77 1.01c.16.2.34.4.54.57l2.49 2.18 1.67 1.46 1.37 1.2c.2.17.38.36.54.57l1.32 1.72c.45.58.5 1.38.13 2.02a1.8 1.8 0 01-.96.8l-2.43.88c-.35.12-.72.2-1.09.22l-2.44.17c-.43.02-.86-.02-1.28-.12l-1.38-.36c-.78-.21-1.6-.17-2.36.1l-1.89.68c-.35.13-.72.2-1.09.23l-2.13.14c-.29.02-.59.01-.87-.04l-4.34-.66-4.34-.99c-.65-.15-1.24-.46-1.74-.89l-1.75-1.53c-.55-.48-1.21-.8-1.92-.93l-2.07-.37c-.71-.13-1.38-.45-1.92-.93l-.69-.6c-.46-.4-1.02-.7-1.62-.86l-2.29-.59-2.68-.7c-.34-.09-.66-.26-.93-.49-.45-.4-1.04-.6-1.65-.56l-1.14.08-1.7.11c-.26.02-.52.01-.78-.03l-1.11-.14c-.75-.1-1.45-.42-2.02-.92a3.76 3.76 0 01-1.12-1.7l-.2-.63a3.84 3.84 0 00-.36-.8l-.63-1.08c-.22-.37-.5-.7-.82-.98l-.47-.42c-.47-.41-.83-.92-1.07-1.49l-.39-.96a3.96 3.96 0 01-.17-2.52l.21-.81c.19-.72.58-1.37 1.11-1.89l1.87-1.77c.18-.18.37-.33.58-.47l4.21-2.72 4.56-2.4 6.13-2.5 9.19-3.76 3.67-1.6a2.936 2.936 0 001.16-4.49l-3.93-3.93-3.93-3.94-3.41-3.96-1.59-1.74c-.44-.48-1-.85-1.62-1.07l-2.42-.85c-.26-.09-.53-.16-.81-.19l-4.02-.53c-.56-.08-1.1-.27-1.58-.57l-2.69-1.66c-.27-.17-.56-.3-.87-.4l-4.56-1.48c-.23-.07-.45-.17-.66-.28l-3.63-1.95c-.27-.14-.52-.31-.74-.51l-4.28-3.75c-.26-.22-.49-.48-.68-.77l-3.52-5.2c-.17-.26-.32-.54-.43-.84l-1.75-4.67-4.21 1.24c-.28.08-.56.13-.86.15l-2.04.14c-.43.02-.86-.02-1.28-.12l-2.57-.68-3.45-1.03c-.55-.17-1.05-.45-1.48-.82l-1.58-1.38-2.85-2.5c-.33-.28-.69-.51-1.09-.68l-2.64-1.1-3.76-1.33-4.11-.18c-.41-.02-.82.03-1.22.14l-3.68.99c-.57.16-1.17.18-1.76.08l-3.36-.61a3.554 3.554 0 01-1.91 2.32l-1.04.5-1.21.71c-.53.31-1.14.49-1.76.54l-2.71.18-2.8.18c-.22.02-.44.01-.66-.01l-2.84-.28-3.72-.8-1.39-.18c-.79-.11-1.49-.57-1.9-1.26l-.06-.11a2.273 2.273 0 01.48-2.88l1.17-1.01c.18-.15.38-.29.58-.41l1.71-1.01-1.22-1.07c-.65-.57-1.47-.91-2.34-.97l-2.36-.18-4.24-.77-1.61-.52c-.7-.23-1.32-.64-1.8-1.2l-.79-.92c-.12-.14-.26-.28-.4-.4l-2.36-2.06c-.14-.13-.29-.24-.45-.34l-1.16-.76c-.52-.34-.96-.8-1.27-1.33l-.71-1.2-.9-.79a5.18 5.18 0 01-.4-.41l-.65-.75c-.56-.66-.9-1.48-.95-2.34l-.05-.76-.08-1.09c-.06-.94.38-1.85 1.15-2.39l1.26-.87 2.99-2.3 4-2.89 4.56-2.4 5.87-2.4c.17-.07.34-.15.5-.25l2.47-1.45c.21-.12.41-.26.59-.41l.82-.71c.58-.5 1.01-1.15 1.23-1.88l.95-3.17 1.36-3.23 1.35-2.35c.34-.61.84-1.11 1.44-1.46l4.13-2.42 3.94-3.02c.37-.28.77-.5 1.21-.64l3.03-.97c.28-.09.55-.21.8-.36l3.66-2.15 3.79-2.22c.16-.09.33-.18.51-.25l4.33-1.77 5.63-1.95-.86-.76a2.587 2.587 0 01-.76-2.74l.38-1.15c.2-.64.78-1.09 1.45-1.13.3-.02.59-.12.83-.29l2.13-1.48 1.6-1.11a4.03 4.03 0 012.01-.71l1.09-.07c.62-.04 1.22-.22 1.76-.54l2.21-1.3 2.5-1.74.98-.83c.65-.57 1.48-.9 2.34-.96h.07c.79-.06 1.57.12 2.26.52l1.68.97c.36.2.68.46.96.76l1.56 1.7c.19.21.35.44.5.68l1.56 2.66 1.44 2.08c.2.28.36.6.48.93l.94 2.63c.11.3.25.59.43.86l2.07 3.11 3.8-1.22c.2-.07.4-.15.59-.25l2.53-1.29a3.99 3.99 0 011.55-.43l4.37-.29c.37-.02.74 0 1.1.08l2.66.57c.35.08.68.2.99.36l2.24 1.15 2.23 1.27c.68.4 1.47.58 2.25.53l1.16-.08c.51-.03 1-.16 1.46-.38l1.85-.89 1.37-.66c.76-.36 1.61-.48 2.44-.33l.54.1c.21.04.41.09.61.16l2.69.95c.51.18 1.05.25 1.59.21l4.1-.27c.2-.01.4-.04.6-.09l6.12-1.36c.2-.04.4-.07.6-.09l4.36-.29c.37-.02.74.01 1.11.08l2.56.56c.41.08.8.23 1.15.44l.5.28c.4.23.83.39 1.28.47l2.68.48c.58.11 1.18.08 1.75-.07l.8-.22c.6-.16 1.23-.18 1.84-.06l4.42.9c.33.07.65.17.95.32l2.44 1.18c.59.29 1.1.72 1.49 1.26l2.03 2.82c.18.24.38.47.61.67l1.83 1.59c.4.36.88.63 1.39.8l1.17.38c.48.15.99.22 1.5.18l.6-.04c.48-.03.95-.15 1.38-.34l3.17-1.44c.16-.07.33-.13.5-.18a3.33 3.33 0 013.64 1.37l1.01 1.52 2.3 2.99 4.74 5.52c.25.29.53.54.85.75l6.1 3.96 3.05 2.22c.17.12.33.26.48.41l3.33 3.33c.25.25.53.47.84.64l2.31 1.33c.33.19.69.33 1.07.42l5.97 1.41c.26.06.51.15.75.26l5.13 2.37c.3.14.59.32.85.53l7.55 6.16c.25.21.53.38.82.52l4.43 2.09 14.69 7.93 16.32 8.88 24.53 14.1 16.57 12.53 10.91 9.54c.15.14.29.28.42.43l7.78 9.2 12 14.93 8.49 12.69c.16.24.3.51.41.78l5.54 14.41 6.41 17.4 3 7.35c.09.21.15.42.2.64l1.36 6.09c.04.2.07.4.09.6l.46 7.02c.03.34.01.68-.06 1.01l-2.62 13.84-2.02 9.05-.9 10.02-.32 18.9 1.5 22.45 1.08 16.18-.25 12.08.26 3.84c.12 1.75-.92 3.37-2.56 4l-1.77.67c-1.32.51-2.8.28-3.9-.59l-3.75-2.95-5.81-5.08c-.57-.5-.99-1.15-1.2-1.88l-2.39-8.14-4.63-14.38-2.78-10.3-3.03-13.95-4.28-17.02-1.07-8.76c-.05-.4-.04-.81.03-1.2l.27-1.53.24-2.76c.06-.65.28-1.29.63-1.84l.57-.87c.21-.32.46-.6.75-.85l.75-.65c.52-.45.92-1.02 1.16-1.67l.62-1.72.76-2.34c.08-.23.17-.44.28-.65.42-.81 1.54-2.98 2.13-4.56.61-1.64 1.99-1.56 2.29-3.28.1-.58.26-1.27.42-1.93.17-.65-.69-1.12-1.13-.62-.02.03-.05.05-.07.07l-3.44 2.83-3.74 2.69c-.18.13-.36.24-.56.34l-5.47 2.72c-.22.11-.45.2-.68.26l-6.44 1.84c-.27.08-.55.12-.83.14l-8.15.55c-.2.01-.41.01-.61-.01l-6.26-.54c-.19-.02-.39-.05-.58-.09l-5.67-1.34c-.64-.15-1.22-.46-1.72-.89l-2.03-1.78-1.66-1.73a3.944 3.944 0 00-2.85-1.24l-4.82-.05c-.21-.01-.41.01-.62.04l-4.77.69c-1.07.15-2.03.73-2.67 1.6l-1.03 1.43c-.25.34-.55.64-.9.89l-2.31 1.67c-.76.54-1.3 1.33-1.53 2.23l-1.23 4.71c-.05.2-.09.41-.11.62l-.45 4.6c-.09.89.26 1.77.93 2.36.72.63 1.06 1.58.92 2.52l-.3 1.94c-.13.85.02 1.73.43 2.5l2.36 4.39 2.33 3.97c.38.64.3 1.45-.19 2.01-.4.45-1.01.67-1.6.56l-2.43-.44c-1.05-.19-1.79 1.02-1.13 1.87.27.36.32.84.11 1.25l-.57 1.11a2.85 2.85 0 01-2.61 1.55l-4.51-.1c-.44-.02-.89.05-1.32.19l-.75.24c-.43.14-.84.35-1.21.63l-2.44 1.88-3.45 3.37-2.78 2.14c-.62.48-1.38.76-2.17.81l-.84.06a3.91 3.91 0 01-1.59-.22l-2.21-.77c-.51-.18-1.06-.26-1.6-.22l-1.97.13c-.57.04-1.12.2-1.62.47l-4 2.15c-.53.28-.99.68-1.35 1.17l-1.66 2.29c-.14.18-.28.35-.44.51l-2.49 2.44c-.47.46-1.05.8-1.68.98l-3 .88c-.44.13-.9.18-1.36.16l-2.57-.15c-.6-.04-1.18.21-1.57.66-.23.26-.53.46-.86.56l-3.13 1.01c-.31.1-.63.16-.96.18l-1.31.09a4.02 4.02 0 01-2.45-.64l-.53-.34c-.36-.24-.76-.41-1.17-.52l-3.66-.96c-.34-.09-.67-.22-.98-.4l-2.81-1.61-2.67-1.3c-.72-.35-1.29-.96-1.59-1.7l-.26-.63a2.199 2.199 0 00-1.9-1.36l-.41-.02a1.872 1.872 0 01-1.67-2.45c.07-.25.2-.47.37-.66l2.69-3.07c.31-.36.68-.65 1.09-.88l5.52-3.01c.29-.15.6-.28.91-.36l7.77-2 9.78-2.75 8.74-2.67 4.16-1.08c.73-.18.63-1.25-.13-1.29l-5.81-.66-5.25-.18-7.26-.48c-.43-.03-.85.01-1.26.12l-7.63 1.96-5.51 2.11c-.74.28-1.37.79-1.81 1.46-.49.75-1.23 1.31-2.09 1.56l-2.87.84c-.28.08-.57.13-.86.15l-2.09.14a2.3 2.3 0 01-2.28-1.42 2.287 2.287 0 00-2.27-1.42l-.26.02c-.46.03-.92-.06-1.34-.27l-3.16-1.53-.37-.12a4 4 0 01-2.71-3.15l-.47-2.79-.26-3.87c-.07-1.19.38-2.34 1.24-3.16l.21-.21a4.02 4.02 0 013.28-1.07l3.01.4c.26.03.52.04.78.02l5.26-.35c.41-.03.8-.11 1.18-.26l6.66-2.58c.62-.24 1.3-.32 1.97-.23l4.27.56 9.42.36c.38.01.76-.02 1.13-.12l10.18-2.56c.4-.1.79-.26 1.14-.48l5.63-3.5c.89-.56 1.53-1.44 1.77-2.46l1.6-6.64c.05-.2.08-.4.1-.6l.79-9.54c.03-.47-.01-.93-.13-1.38l-1.9-7.05-3.9-12.5c-.07-.23-.12-.46-.15-.69z"
        ></path>
        <path
          stroke="#000"
          d="M1227.38 1086.11l3.8-1.22c.2-.07.4-.15.59-.25l2.53-1.29a3.99 3.99 0 011.55-.43l4.37-.29c.37-.02.74 0 1.1.08l2.66.57c.35.08.68.2.99.36l2.24 1.15 2.23 1.27c.68.4 1.47.58 2.25.53l1.16-.08c.51-.03 1-.16 1.46-.38l1.85-.89 1.37-.66c.76-.36 1.61-.48 2.44-.33l.54.1c.21.04.41.09.61.16l2.69.95c.51.18 1.05.25 1.59.21l4.1-.27c.2-.01.4-.04.6-.09l6.12-1.36c.2-.04.4-.07.6-.09l4.36-.29c.37-.02.74.01 1.11.08l2.56.56c.41.08.8.23 1.15.44l.5.28c.4.23.83.39 1.28.47l2.68.48c.58.11 1.18.08 1.75-.07l.8-.22c.6-.16 1.23-.18 1.84-.06l4.42.9c.33.07.65.17.95.32l2.44 1.18c.59.29 1.1.72 1.49 1.26l2.03 2.82c.18.24.38.47.61.67l1.83 1.59c.4.36.88.63 1.39.8l1.17.38c.48.15.99.22 1.5.18l.6-.04c.48-.03.95-.15 1.38-.34l3.17-1.44c.16-.07.33-.13.5-.18v0a3.33 3.33 0 013.64 1.37l1.01 1.52 2.3 2.99 4.74 5.52c.25.29.53.54.85.75l6.1 3.96 3.05 2.22c.17.12.33.26.48.41l3.33 3.33c.25.25.53.47.84.64l2.31 1.33c.33.19.69.33 1.07.42l5.97 1.41c.26.06.51.15.75.26l5.13 2.37c.3.14.59.32.85.53l7.55 6.16c.25.21.53.38.82.52l4.43 2.09 14.69 7.93 16.32 8.88 24.53 14.1 16.57 12.53 10.91 9.54c.15.14.29.28.42.43l7.78 9.2 12 14.93 8.49 12.69c.16.24.3.51.41.78l5.54 14.41 6.41 17.4 3 7.35c.09.21.15.42.2.64l1.36 6.09c.04.2.07.4.09.6l.46 7.02c.03.34.01.68-.06 1.01l-2.62 13.84-2.02 9.05-.9 10.02-.32 18.9 1.5 22.45 1.08 16.18-.25 12.08.26 3.84c.12 1.75-.92 3.37-2.56 4l-1.77.67c-1.32.51-2.8.28-3.9-.59l-3.75-2.95-5.81-5.08c-.57-.5-.99-1.15-1.2-1.88l-2.39-8.14-4.63-14.38-2.78-10.3-3.03-13.95-4.28-17.02-1.07-8.76c-.05-.4-.04-.81.03-1.2l.27-1.53.24-2.76c.06-.65.28-1.29.63-1.84l.57-.87c.21-.32.46-.6.75-.85l.75-.65c.52-.45.92-1.02 1.16-1.67l.62-1.72.76-2.34c.08-.23.17-.44.28-.65.42-.81 1.54-2.98 2.13-4.56.61-1.64 1.99-1.56 2.29-3.28.1-.58.26-1.27.42-1.93.17-.65-.69-1.12-1.13-.62v0c-.02.03-.05.05-.07.07l-3.44 2.83-3.74 2.69c-.18.13-.36.24-.56.34l-5.47 2.72c-.22.11-.45.2-.68.26l-6.44 1.84c-.27.08-.55.12-.83.14l-8.15.55c-.2.01-.41.01-.61-.01l-6.26-.54c-.19-.02-.39-.05-.58-.09l-5.67-1.34c-.64-.15-1.22-.46-1.72-.89l-2.03-1.78-1.66-1.73a3.944 3.944 0 00-2.85-1.24l-4.82-.05c-.21-.01-.41.01-.62.04l-4.77.69c-1.07.15-2.03.73-2.67 1.6l-1.03 1.43c-.25.34-.55.64-.9.89l-2.31 1.67c-.76.54-1.3 1.33-1.53 2.23l-1.23 4.71c-.05.2-.09.41-.11.62l-.45 4.6c-.09.89.26 1.77.93 2.36v0c.72.63 1.06 1.58.92 2.52l-.3 1.94c-.13.85.02 1.73.43 2.5l2.36 4.39 2.33 3.97c.38.64.3 1.45-.19 2.01v0c-.4.45-1.01.67-1.6.56l-2.43-.44c-1.05-.19-1.79 1.02-1.13 1.87v0c.27.36.32.84.11 1.25l-.57 1.11a2.85 2.85 0 01-1.46 1.34v0c-.37.15-.76.22-1.15.21l-4.51-.1c-.44-.02-.89.05-1.32.19l-.75.24c-.43.14-.84.35-1.21.63l-2.44 1.88-3.45 3.37-2.78 2.14c-.62.48-1.38.76-2.17.81l-.84.06a3.91 3.91 0 01-1.59-.22l-2.21-.77c-.51-.18-1.06-.26-1.6-.22l-1.97.13c-.57.04-1.12.2-1.62.47l-4 2.15c-.53.28-.99.68-1.35 1.17l-1.66 2.29c-.14.18-.28.35-.44.51l-2.49 2.44c-.47.46-1.05.8-1.68.98l-3 .88c-.44.13-.9.18-1.36.16l-2.57-.15c-.6-.04-1.18.21-1.57.66v0c-.23.26-.53.45-.86.56l-3.13 1.01c-.31.1-.63.16-.96.18l-1.31.09a4.02 4.02 0 01-2.45-.64l-.53-.34c-.36-.24-.76-.41-1.17-.52l-3.66-.96c-.34-.09-.67-.22-.98-.4l-2.81-1.61-2.67-1.3c-.72-.35-1.29-.96-1.59-1.7l-.26-.63a2.199 2.199 0 00-1.9-1.36l-.41-.02a1.868 1.868 0 01-1.67-2.45v0c.07-.25.2-.47.37-.66l2.69-3.07c.31-.36.68-.65 1.09-.88l5.52-3.01c.29-.15.6-.28.91-.36l7.77-2 9.78-2.75 8.74-2.67 4.16-1.08c.73-.18.63-1.25-.13-1.29v0l-5.81-.66-5.25-.18-7.26-.48c-.43-.03-.85.01-1.26.12l-7.63 1.96-5.51 2.11c-.74.28-1.37.79-1.81 1.46v0c-.49.75-1.23 1.31-2.09 1.56l-2.87.84c-.28.08-.57.13-.86.15l-2.09.14a2.3 2.3 0 01-2.28-1.42v0a2.287 2.287 0 00-2.27-1.42l-.26.02c-.46.03-.92-.06-1.34-.27l-3.16-1.53-.37-.12a4 4 0 01-2.71-3.15l-.47-2.79-.26-3.87c-.07-1.19.38-2.34 1.24-3.16l.21-.21a4.02 4.02 0 013.28-1.07l3.01.4c.26.03.52.04.78.02l5.26-.35c.41-.03.8-.11 1.18-.26l6.66-2.58c.62-.24 1.3-.32 1.97-.23l4.27.56 9.42.36c.38.01.76-.02 1.13-.12l10.18-2.56c.4-.1.79-.26 1.14-.48l5.63-3.5c.89-.56 1.53-1.44 1.77-2.46l1.6-6.64c.05-.2.08-.4.1-.6l.79-9.54c.03-.47-.01-.93-.13-1.38l-1.9-7.05-3.9-12.5c-.07-.23-.12-.46-.15-.69l-1.84-14.64a4 4 0 00-2.96-3.37l-.28-.08c-.2-.05-.41-.09-.62-.11l-2.85-.28-4.25-.77-3.42-.73c-.2-.04-.41-.07-.61-.08l-3.22-.19c-.45-.03-.9-.13-1.32-.3l-1.68-.71c-.61-.26-1.14-.65-1.55-1.16l-2.22-2.71-2.34-3.51-1.85-2.41c-.29-.39-.65-.72-1.07-.97l-2.69-1.67c-.34-.21-.71-.36-1.09-.46l-2.62-.69-2.68-.87-1.67-.7c-.32-.13-.67-.23-1.02-.27l-1.72-.23a5.22 5.22 0 00-.79-.03l-.65.05-2.61.17-1.96.13c-.43.03-.85.13-1.25.29l-.67.27c-.17.08-.34.16-.51.26l-1.02.6c-.49.29-1.05.46-1.62.49v0c-.79.06-1.58-.15-2.24-.58l-.93-.61c-.16-.1-.31-.21-.45-.34l-.55-.48c-.59-.52-1.33-.85-2.11-.95l-.72-.1a3.88 3.88 0 00-1.44.08l-1.8.42c-.39.09-.76.24-1.1.44l-1.5.88-.54.41c-.62.48-1.38.77-2.17.82l-1.53.1c-.26.02-.52.01-.78-.02l-2.26-.3-1.14-.2c-.64-.12-1.31-.08-1.93.12l-1.1.36-.55.22c-.61.25-1.06.8-1.17 1.45v0c-.12.67.12 1.35.63 1.8l.12.11c.11.09.21.2.3.32l.77 1.01c.16.2.34.4.54.57l2.49 2.18 1.67 1.46 1.37 1.2c.2.17.38.36.54.57l1.32 1.72c.45.58.5 1.38.13 2.02v0a1.8 1.8 0 01-.96.8l-2.43.88c-.35.12-.72.2-1.09.22l-2.44.17c-.43.02-.86-.02-1.28-.12l-1.38-.36c-.78-.21-1.6-.17-2.36.1l-1.89.68c-.35.13-.72.2-1.09.23l-2.13.14c-.29.02-.59.01-.87-.04l-4.34-.66-4.34-.99c-.65-.15-1.24-.46-1.74-.89l-1.75-1.53c-.55-.48-1.21-.8-1.92-.93l-2.07-.37c-.71-.13-1.38-.45-1.92-.93l-.69-.6c-.46-.4-1.02-.7-1.62-.86l-2.29-.59-2.68-.7c-.34-.09-.66-.26-.93-.49v0c-.45-.4-1.04-.6-1.65-.56l-1.14.08-1.7.11c-.26.02-.52.01-.78-.03l-1.11-.14c-.75-.1-1.45-.42-2.02-.92v0a3.76 3.76 0 01-1.12-1.7l-.2-.63a3.84 3.84 0 00-.36-.8l-.63-1.08c-.22-.37-.5-.7-.82-.98l-.47-.42c-.47-.41-.83-.92-1.07-1.49l-.39-.96a3.96 3.96 0 01-.17-2.52l.21-.81c.19-.72.58-1.37 1.11-1.89l1.87-1.77c.18-.18.37-.33.58-.47l4.21-2.72 4.56-2.4 6.13-2.5 9.19-3.76 3.67-1.6a2.936 2.936 0 001.16-4.49v0l-3.93-3.93-3.93-3.94-3.41-3.96-1.59-1.74c-.44-.48-1-.85-1.62-1.07l-2.42-.85c-.26-.09-.53-.16-.81-.19l-4.02-.53c-.56-.08-1.1-.27-1.58-.57l-2.69-1.66c-.27-.17-.56-.3-.87-.4l-4.56-1.48c-.23-.07-.45-.17-.66-.28l-3.63-1.95c-.27-.14-.52-.31-.74-.51l-4.28-3.75c-.26-.22-.49-.48-.68-.77l-3.52-5.2c-.17-.26-.32-.54-.43-.84l-1.75-4.67m9.44-70.89l-2.07-3.11c-.18-.27-.32-.56-.43-.86l-.94-2.63a3.9 3.9 0 00-.48-.93l-1.44-2.08-1.56-2.66c-.15-.24-.31-.47-.5-.68l-1.56-1.7c-.28-.3-.6-.56-.96-.76l-1.68-.97c-.69-.4-1.47-.58-2.26-.52h-.07c-.86.06-1.69.39-2.34.96l-.98.83-2.5 1.74-2.21 1.3c-.54.32-1.14.5-1.76.54l-1.09.07c-.72.05-1.42.3-2.01.71l-1.6 1.11-2.13 1.48c-.24.17-.53.27-.83.29v0c-.67.04-1.25.49-1.45 1.13l-.38 1.15c-.1.31-.14.64-.12.97v0c.05.68.36 1.32.88 1.77l.86.76m31.61 2.09l-2.45.58c-.43.1-.88.13-1.31.08l-2.2-.21c-.2-.02-.41-.06-.61-.11l-2.6-.68c-.2-.05-.4-.09-.61-.11l-2.86-.28-4.44-.68c-.22-.04-.43-.09-.63-.15l-1.92-.63c-.3-.09-.62-.16-.93-.18l-2.85-.21c-.24-.02-.48-.06-.71-.12l-2.23-.58c-.41-.11-.84-.15-1.27-.12l-1.02.06c-.62.05-1.23.23-1.76.54l-1.21.71m0 0l-5.63 1.95-4.33 1.77c-.18.07-.35.16-.51.25l-3.79 2.22-3.66 2.15c-.25.15-.52.27-.8.36l-3.03.97c-.44.14-.84.36-1.21.64l-3.94 3.02-4.13 2.42c-.6.35-1.1.85-1.44 1.46l-1.35 2.35-1.36 3.23-.95 3.17c-.22.73-.65 1.38-1.23 1.88l-.82.71c-.18.15-.38.29-.59.41l-2.47 1.45c-.16.1-.33.18-.5.25l-5.87 2.4-4.56 2.4-4 2.89-2.99 2.3-1.26.87m1.88 8.53l-.9-.79a5.18 5.18 0 01-.4-.41l-.65-.75c-.56-.66-.9-1.48-.95-2.34l-.05-.76-.08-1.09c-.06-.94.38-1.85 1.15-2.39v0m1.88 8.53l1.05-.07.95-.07a2.75 2.75 0 001.89-.93v0c.15-.17.31-.32.5-.45l1.52-1.05c.46-.33.84-.76 1.1-1.27l.44-.85c.34-.67.27-1.47-.19-2.06v0a1.96 1.96 0 00-1.04-.7l-2.56-.66-2.65-.35-2.89-.07m1.88 8.53l.71 1.2c.31.53.75.99 1.27 1.33l1.16.76c.16.1.31.21.45.34l2.36 2.06c.14.12.28.26.4.4l.79.92c.48.56 1.1.97 1.8 1.2l1.61.52 4.24.77 2.36.18c.87.06 1.69.4 2.34.97l1.22 1.07m0 0l3.4.73c.22.05.44.08.66.09l3.92.17c.32.02.63.07.94.16l5.42 1.57 3.72.8m-18.06-3.52l32.19 3.1m-32.19-3.1l-1.71 1.01c-.2.12-.4.26-.58.41l-1.17 1.01c-.35.3-.6.7-.72 1.15v0c-.15.59-.07 1.21.24 1.73l.06.11c.41.69 1.11 1.15 1.9 1.26l1.39.18 3.72.8 2.84.28c.22.02.44.03.66.01l2.8-.18 2.71-.18a4.16 4.16 0 001.76-.54l1.21-.71 1.04-.5c.95-.46 1.65-1.3 1.91-2.32v0m0 0l3.36.61c.59.1 1.19.08 1.76-.08l3.68-.99c.4-.11.81-.16 1.22-.14l4.11.18m0 0l3.76 1.33 2.64 1.1c.4.17.76.4 1.09.68l2.85 2.5 1.58 1.38c.43.37.93.65 1.48.82l3.45 1.03 2.57.68c.42.1.85.14 1.28.12l2.04-.14c.3-.02.58-.07.86-.15l4.21-1.24m0 0l2.41-1.85c.39-.29.72-.65.97-1.07l1.53-2.47c.3-.48.49-1.02.56-1.58l.54-4.05c.03-.26.04-.52.02-.79l-.08-1.17"
        ></path>
      </g>
      <defs>
        <CricketGradient scroll={props.scroll} />
        <clipPath id="clip0_24_7">
          <path fill="#fff" d="M0 0H1728V1507H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Room;
