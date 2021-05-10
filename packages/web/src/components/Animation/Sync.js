import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { space } from 'styled-system'

const GroupAnimated = motion.g

const smallPhoneAnimate = {
  y: 10
}

const mediumPhoneAnimate = {
  y: 18
}

const largePhoneAnimate = {
  y: 28
}

const transition = {
  loop: Infinity,
  duration: 2
}

const Svg = styled.svg`
  ${space}

  .mix-blend-mode {
    mix-blend-mode: multiply;
  }
`

export const Sync = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 457 378" fill="none">
      <g clipPath="url(#prefix__clip0)">
        <path
          opacity={0.7}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.141 322.987c15.139 0 27.41 2.659 27.41 5.939 0 3.28-12.272 5.939-27.41 5.939s-27.41-2.659-27.41-5.939c0-3.28 12.272-5.939 27.41-5.939z"
          fill="url(#prefix__paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M74.669 294.376c2.062 3.613 3.217 7.661 3.217 11.937 0 15.264-14.726 27.639-32.892 27.639-18.166 0-32.893-12.375-32.893-27.639 0-4.524 1.294-8.795 3.587-12.564 14.571 2.307 43.575 2.158 58.98.627z"
          fill="url(#prefix__paint1_linear)"
        />
        <mask
          id="prefix__a"
          maskUnits="userSpaceOnUse"
          x={12}
          y={293}
          width={66}
          height={41}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M74.669 294.376c2.062 3.613 3.217 7.661 3.217 11.937 0 15.264-14.726 27.639-32.892 27.639-18.166 0-32.893-12.375-32.893-27.639 0-4.524 1.294-8.795 3.587-12.564 14.571 2.307 43.575 2.158 58.98.627z"
            fill="#fff"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.222 288.267c16.526 0 29.923 3.171 29.923 7.081 0 3.911-13.397 7.081-29.923 7.081-16.526 0-29.923-3.17-29.923-7.081 0-3.91 13.397-7.081 29.923-7.081z"
          fill="url(#prefix__paint2_linear)"
        />
        <mask
          id="prefix__b"
          maskUnits="userSpaceOnUse"
          x={15}
          y={288}
          width={61}
          height={15}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M45.222 288.267c16.526 0 29.923 3.171 29.923 7.081 0 3.911-13.397 7.081-29.923 7.081-16.526 0-29.923-3.17-29.923-7.081 0-3.91 13.397-7.081 29.923-7.081z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#prefix__filter0_i)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.118 274.878c-12.794-3.354-50.537-19.571-39.5-38.551 11.036-18.979 22.073-24.444 11.036-33.118-11.037-8.674-3.195-27.966 7.716-35.906 10.91-7.941-14.928-31.594-3.091-44.11 11.836-12.515 49.672 6.818 50.549 30.483.876 23.664 9.678 22.026 14.152 32.71 4.474 10.685-26.517 26.723-21.989 38.332 4.529 11.609 30.945 23.717 15.473 39.356-15.473 15.639-21.551 14.158-34.346 10.804z"
            fill="url(#prefix__paint3_radial)"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.521 299.678c1.493-26.76-26.096-37.919-6.473-75.591 19.624-37.671 5.988-70.199 0-82.585"
          fill="#000"
          fillOpacity={0.01}
        />
        <path
          d="M45.521 299.678c1.493-26.76-26.096-37.919-6.473-75.591 19.624-37.671 5.988-70.199 0-82.585"
          stroke="url(#prefix__paint4_linear)"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity={0.3}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.689 207.588c-3.42-1.627-9.714-6.211-12.829-13.286z"
            fill="#000"
            fillOpacity={0.01}
          />
          <path
            d="M43.689 207.588c-3.42-1.627-9.714-6.211-12.829-13.286"
            stroke="url(#prefix__paint5_linear)"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g opacity={0.3}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.152 256.153c-5.314-2.2-16.182-8.239-16.952-17.41z"
            fill="#000"
            fillOpacity={0.01}
          />
          <path
            d="M33.152 256.153c-5.314-2.2-16.182-8.239-16.952-17.41"
            stroke="url(#prefix__paint6_linear)"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g opacity={0.3}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.984 233.703c4.782 1.346 11.876.121 17.868-8.705z"
            fill="#000"
            fillOpacity={0.01}
          />
          <path
            d="M34.984 233.703c4.782 1.346 11.876.121 17.868-8.705"
            stroke="url(#prefix__paint7_linear)"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g opacity={0.3}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.27 165.438c3.117-2.458 9.176-12.161 8.706-20.618z"
            fill="#000"
            fillOpacity={0.01}
          />
          <path
            d="M48.27 165.438c3.117-2.458 9.176-12.161 8.706-20.618"
            stroke="url(#prefix__paint8_linear)"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M449.598 209.7H191.053c-3.649 0-6.608-2.145-6.608-4.793V5.093c0-2.648 2.959-4.793 6.608-4.793h258.545c3.65 0 6.608 2.145 6.608 4.793v199.814c0 2.639-2.938 4.779-6.608 4.793z"
          fill="url(#prefix__paint9_radial)"
        />
        <rect
          x={202.588}
          y={19}
          width={240.412}
          height={178}
          rx={8}
          fill="#C2D0EA"
        />
        <rect x={199} y={15} width={240.412} height={178} rx={8} fill="#fff" />
        <rect
          x={223}
          y={31}
          width={38}
          height={53}
          rx={4}
          fill="#7E9ACA"
          fillOpacity={0.2}
        />
        <rect x={220} y={28} width={38} height={53} rx={4} fill="#CDDAF0" />

        <GroupAnimated transition={transition} animate={smallPhoneAnimate}>
          <rect x={224} y={34} width={30} height={5} rx={1.5} fill="#fff" />
          <rect x={224} y={42} width={27} height={5} rx={1.5} fill="#fff" />
          <rect x={224} y={50} width={14} height={5} rx={1.5} fill="#fff" />
        </GroupAnimated>

        <rect
          x={285.732}
          y={31.732}
          width={47.268}
          height={65.927}
          rx={4}
          fill="#7E9ACA"
          fillOpacity={0.2}
        />
        <rect
          x={282}
          y={28}
          width={47.268}
          height={65.927}
          rx={4}
          fill="#CDDAF0"
        />

        <GroupAnimated transition={transition} animate={mediumPhoneAnimate}>
          <rect x={287} y={34} width={37} height={5} rx={1.5} fill="#fff" />
          <rect x={287} y={42} width={33.3} height={5} rx={1.5} fill="#fff" />
          <rect x={287} y={50} width={17.267} height={5} rx={1.5} fill="#fff" />
        </GroupAnimated>

        <rect
          x={357.661}
          y={30.661}
          width={61.339}
          height={85.552}
          rx={4}
          fill="#7E9ACA"
          fillOpacity={0.2}
        />
        <rect
          x={354}
          y={27}
          width={61.339}
          height={85.552}
          rx={4}
          fill="#D0DCF2"
        />

        <GroupAnimated transition={transition} animate={largePhoneAnimate}>
          <rect x={361} y={34} width={48} height={6} rx={1.8} fill="#fff" />
          <rect x={361} y={44} width={43.2} height={6} rx={1.8} fill="#fff" />
          <rect x={361} y={54} width={22.4} height={6} rx={1.8} fill="#fff" />
        </GroupAnimated>

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M231.118 361.269h-13.277c-1.846-3.844-3.07-7.14-3.672-9.886-.904-4.119-2.263-7.183-.904-12.743 1.36-5.561 16.998-8.712 18.971-6.931 1.973 1.781 1.652 2.734 9.469 6.885 4.722 2.508 13.462 6.55 26.22 12.126a6.826 6.826 0 014.092 6.255 4.556 4.556 0 01-4.473 4.554c-13.886.25-22.529.375-25.93.375a62.088 62.088 0 01-10.496-4.942v4.307z"
          fill="url(#prefix__paint10_linear)"
        />
        <mask id="prefix__c" fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M247.832 345.373c.913-.973 5.71-3.997 7.766-2.161l-7.766 2.161z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M247.832 345.373c.913-.973 5.71-3.997 7.766-2.161l-7.766 2.161z"
          fill="#000"
          fillOpacity={0.01}
        />
        <path
          d="M250.746 348.112c-.09.096-.099.088.044-.022.119-.092.292-.216.512-.357a9.845 9.845 0 011.51-.796c.56-.231.915-.297 1.048-.304.121-.007-.384.047-.927-.438l5.33-5.966c-1.571-1.403-3.447-1.659-4.832-1.585-1.373.074-2.66.481-3.671.898-1.043.43-2.004.961-2.779 1.458-.705.452-1.5 1.033-2.064 1.633l5.829 5.479z"
          fill="#D2DDF1"
          mask="url(#prefix__c)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M152.801 265.542s40.735-22.676 51.001-26.835c10.266-4.158 26.475-8.543 28.708-6.938 2.234 1.605 15.831 13.292 20.178 31.245 4.348 17.954 7.371 70.221 12.524 74.161-6.179 4.907-51.323 12.407-61.41 9.019 0-12.303-1.901-43.063 0-49.028-3.811 1.807-28.689 14.489-38.96 17.19-5.032 1.323-15.615-11.044-17.358-23.316-1.813-12.773 5.317-25.498 5.317-25.498z"
          fill="url(#prefix__paint11_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M205.679 295.418c2.514-1.899 9.986-8.441 11.896-9.347-3.258 6.496-6.284 19.537-6.284 25.529-3.012-1.955-5.72-3.952-8.126-5.992 0-5.527.838-8.923 2.514-10.19z"
          fill="url(#prefix__paint12_linear)"
        />
        <mask
          id="prefix__d"
          maskUnits="userSpaceOnUse"
          x={203}
          y={286}
          width={15}
          height={26}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M205.679 295.418c2.514-1.899 9.986-8.441 11.896-9.347-3.258 6.496-6.284 19.537-6.284 25.529-3.012-1.955-5.72-3.952-8.126-5.992 0-5.527.838-8.923 2.514-10.19z"
            fill="#fff"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M92.715 318.109c-2.206 1.744-4.355 45.473 0 46.368 4.353.895 15.747-9.171 12.876-27.815-2.87-18.644-10.658-16.443-12.876-18.553z"
          fill="url(#prefix__paint13_linear)"
        />
        <mask
          id="prefix__e"
          maskUnits="userSpaceOnUse"
          x={90}
          y={318}
          width={17}
          height={47}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M92.715 318.109c-2.206 1.744-4.355 45.473 0 46.368 4.353.895 15.747-9.171 12.876-27.815-2.87-18.644-10.658-16.443-12.876-18.553z"
            fill="#fff"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M106.926 344.709c-4.944 2.569-11.724 1.399-20.34-3.511-2.102 4.749-3.468 8.076-4.096 9.982-2.758 8.368-1.888 12.711 2.612 13.029 6.036.427 13.31.641 21.824.641 4.944-15.997 4.944-22.71 0-20.141z"
          fill="url(#prefix__paint14_linear)"
        />
        <mask
          id="prefix__f"
          maskUnits="userSpaceOnUse"
          x={80}
          y={341}
          width={31}
          height={24}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M106.926 344.709c-4.944 2.569-11.724 1.399-20.34-3.511-2.102 4.749-3.468 8.076-4.096 9.982-2.758 8.368-1.888 12.711 2.612 13.029 6.036.427 13.31.641 21.824.641 4.944-15.997 4.944-22.71 0-20.141z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#prefix__f)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M94.646 365.471c1.767-4.584-.207-19.622-3.96-23.825-3.751-4.203 13.722 2.702 13.722 2.702s-1.083 10.738-2.462 13.785c-4.058 8.97-8.179 9.619-7.3 7.338z"
            fill="url(#prefix__paint15_linear)"
            style={{
              mixBlendMode: 'multiply'
            }}
            opacity={0.6}
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M80.637 337.416c3.63 2.148 5.738 3.473 10.394 5.653 1.748.819-3.28 2.938-8.327 9.93-4.367 6.05 1.77 10.896 0 11.049-2.648.228-3.126-.657-11.493 2.229-5.024 1.732-13.606 5.036-25.745 9.911a7.027 7.027 0 01-7.413-1.382 4.55 4.55 0 01-.277-6.374c8.662-9.609 14.145-15.648 16.45-18.12a62.165 62.165 0 0110.772-4.305l-3.15-2.938 9.055-9.71c4.07 1.273 7.315 2.625 9.734 4.057z"
          fill="url(#prefix__paint16_linear)"
        />
        <mask
          id="prefix__g"
          maskUnits="userSpaceOnUse"
          x={36}
          y={333}
          width={56}
          height={44}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80.637 337.416c3.63 2.148 5.738 3.473 10.394 5.653 1.748.819-3.28 2.938-8.327 9.93-4.367 6.05 1.77 10.896 0 11.049-2.648.228-3.126-.657-11.493 2.229-5.024 1.732-13.606 5.036-25.745 9.911a7.027 7.027 0 01-7.413-1.382 4.55 4.55 0 01-.277-6.374c8.662-9.609 14.145-15.648 16.45-18.12a62.165 62.165 0 0110.772-4.305l-3.15-2.938 9.055-9.71c4.07 1.273 7.315 2.625 9.734 4.057z"
            fill="#fff"
          />
        </mask>
        <mask id="prefix__h" fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M58.242 365.017c1.028.914 4.226 5.71 2.284 7.766l-2.284-7.766z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M58.242 365.017c1.028.914 4.226 5.71 2.284 7.766l-2.284-7.766z"
          fill="#000"
          fillOpacity={0.01}
        />
        <path
          d="M55.584 368.007c-.094-.084-.082-.089.034.054.098.119.229.293.377.511.303.446.61.98.836 1.5.243.555.303.887.308.986.004.064-.033-.48.48-1.021l5.815 5.493c1.483-1.57 1.774-3.484 1.692-4.926-.08-1.407-.52-2.717-.962-3.732a17.612 17.612 0 00-1.548-2.791c-.481-.708-1.092-1.499-1.717-2.054l-5.315 5.98z"
          fill="#D2DDF1"
          mask="url(#prefix__h)"
        />
        <mask id="prefix__i" fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62.81 362.733c1.028.913 4.226 5.71 2.284 7.766l-2.284-7.766z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M62.81 362.733c1.028.913 4.226 5.71 2.284 7.766l-2.284-7.766z"
          fill="#000"
          fillOpacity={0.01}
        />
        <path
          d="M60.153 365.722c-.094-.083-.083-.088.034.054a9.647 9.647 0 011.213 2.011c.242.556.302.888.308.987.003.064-.033-.48.478-1.022l5.816 5.493c1.483-1.569 1.775-3.483 1.693-4.925-.08-1.408-.52-2.717-.963-3.732a17.612 17.612 0 00-1.548-2.791c-.48-.709-1.092-1.499-1.716-2.054l-5.315 5.979z"
          fill="#D2DDF1"
          mask="url(#prefix__i)"
        />
        <mask id="prefix__j" fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M67.379 360.905c1.027.914 4.225 5.711 2.284 7.767l-2.284-7.767z"
          />
        </mask>
        <path
          d="M70.036 357.916a4 4 0 10-5.315 5.979l5.315-5.979zm-3.281 8.009a4 4 0 005.816 5.493l-5.816-5.493zm-2.034-2.03c-.094-.084-.083-.089.034.054a9.61 9.61 0 011.213 2.011c.242.555.302.888.308.986.004.064-.033-.479.479-1.021l5.816 5.493c1.482-1.57 1.774-3.484 1.692-4.926-.08-1.407-.52-2.717-.963-3.732a17.607 17.607 0 00-1.548-2.79c-.48-.709-1.091-1.499-1.716-2.054l-5.315 5.979z"
          fill="#D2DDF1"
          mask="url(#prefix__j)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M108.454 270.695c-5.658 8.045-7.386 21.653-3.555 31.024 3.401 8.318 16.698 17.444 19.666 18.684-6.689 0-29.096-1.108-31.976-2.241 2.61 13.68 15.865 35.68 2.61 46.457 9.7 1.095 93.215 2.19 101.904 1.095 8.688-1.095 37.393 3.264 39.946-11.872 2.552-15.136-17.621-35.915-24.015-41.137-6.394-5.222-42.296-27.653-48.411-34.379-6.115-6.726-50.511-15.676-56.169-7.631z"
          fill="#B2C7EE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M108.454 270.695c-5.658 8.045-7.386 21.653-3.555 31.024 3.401 8.318 16.698 17.444 19.666 18.684-6.689 0-29.096-1.108-31.976-2.241 2.61 13.68 15.865 35.68 2.61 46.457 9.7 1.095 93.215 2.19 101.904 1.095 8.688-1.095 37.393 3.264 39.946-11.872 2.552-15.136-17.621-35.915-24.015-41.137-6.394-5.222-42.296-27.653-48.411-34.379-6.115-6.726-50.511-15.676-56.169-7.631z"
          fill="url(#prefix__paint17_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M108.454 270.695c-5.658 8.045-7.386 21.653-3.555 31.024 3.401 8.318 16.698 17.444 19.666 18.684-6.689 0-29.096-1.108-31.976-2.241 2.61 13.68 15.865 35.68 2.61 46.457 9.7 1.095 93.215 2.19 101.904 1.095 8.688-1.095 37.393 3.264 39.946-11.872 2.552-15.136-17.621-35.915-24.015-41.137-6.394-5.222-42.296-27.653-48.411-34.379-6.115-6.726-50.511-15.676-56.169-7.631z"
          fill="url(#prefix__paint18_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M92.574 318.302c1.729 8.03 10.098 14.479 25.107 19.348 22.513 7.302 44.683-1.943 49.389 0-7.646-2.48-27.016-8.022-42.683-17.161-5.445.006-16.049-.723-31.813-2.187z"
          fill="url(#prefix__paint19_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M148.292 87.331c3.914 4.64 4.645 6.756 8.875 10.524 4.229 3.768 10.034 5.104 11.714 5.696 1.68.592-3.36 4.347-1.68 9.211s5.234 12.025 5.234 13.929c0 1.903-6.646 5.261-12.933 8.094-6.286 2.833-7.175 5.217-6.447 10.022.729 4.804 1.761 11.007 6.447 13.722 3.124 1.81-5.716-1.407-26.52-9.651-8.833-19.8-11.041-35.936-6.625-48.408 6.625-18.708 18.021-17.779 21.935-13.139z"
          fill="url(#prefix__paint20_linear)"
        />
        <mask
          id="prefix__k"
          maskUnits="userSpaceOnUse"
          x={124}
          y={84}
          width={49}
          height={76}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M148.292 87.331c3.914 4.64 4.645 6.756 8.875 10.524 4.229 3.768 10.034 5.104 11.714 5.696 1.68.592-3.36 4.347-1.68 9.211s5.234 12.025 5.234 13.929c0 1.903-6.646 5.261-12.933 8.094-6.286 2.833-7.175 5.217-6.447 10.022.729 4.804 1.761 11.007 6.447 13.722 3.124 1.81-5.716-1.407-26.52-9.651-8.833-19.8-11.041-35.936-6.625-48.408 6.625-18.708 18.021-17.779 21.935-13.139z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#prefix__k)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M139.531 123.276c1.807 2.193 4.908 6.357 8.777 8.703 3.649 2.213 10.112 2.265 14.005 2.265 8.02 0-10.788 14.884-10.788 14.884l-11.994-2.4s-3.513-27.715 0-23.452z"
            fill="url(#prefix__paint21_linear)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M148.911 99.77c0-1.691 2.098-4.628 3.876-4.628l-3.876 4.628z"
            fill="#000"
            fillOpacity={0.01}
          />
          <path
            d="M148.911 99.77c0-1.691 2.098-4.628 3.876-4.628"
            stroke="#223762"
            strokeWidth={3}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M155.667 104.131c.759-.202 1.015-1.273.571-2.391-.444-1.119-1.42-1.862-2.179-1.66-.759.202-1.015 1.272-.571 2.391.444 1.119 1.42 1.862 2.179 1.66zM166.869 112.759c.403-.304.36.277.654.835.295.559.597 1.529.727 1.904-1.67 1.261-5.062.648-7.417-.247-.472-.179-.959-.772-.665-1.182.294-.41.774-.268 1.275-.209 1.749.205 4.385-.315 5.426-1.101z"
            fill="#223762"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M237.324 137.053c-.604-.951-1.168-14.563.457-16.447 1.625-1.884 5.798-4.196 6.396-3.654.598.541 2.07 3.476.914 4.111-1.157.635-3.364 2.858-3.198 3.655.165.796.505 3.157 1.37 4.111.865.955-4.527 10.443-5.939 8.224z"
          fill="#346CC7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M231.281 121.494l26.055-12.668a3.728 3.728 0 014.731 1.282 3.342 3.342 0 01-.846 4.584l-23.961 16.986a5.904 5.904 0 01-8.505-1.826 5.945 5.945 0 012.526-8.358z"
          fill="#223762"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M230.507 152.205c3.185-3.975 5.196-6.564 6.033-7.766.589-.847-.358-6.411.893-8.697 1.252-2.287 2.132-3.008 3.039-4.335.295-.433 1.738-2.586 2.134-3.824 1.045-3.273 1.367-4.838 1.592-6.692.309-2.557 7.182-7.77 8.023-9.603.841-1.832 2.751-2.409 3.769 0 1.019 2.41-5.889 8.728-5.889 12.053 0 .2 2.95-4.388 4.785-4.846 1.672 0 1.467 2.301 2.193 5.49.709 3.109 4.705 6.89 4.705 10.936 0 2.348.006 4.248 0 4.611-.059 3.452-12.593 13.23-15.329 17.151a212.108 212.108 0 01-5.983 8.13l-9.965-12.608z"
          fill="url(#prefix__paint22_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.733 271.291c-1.718 7.468-2.915 12.054-3.591 13.757-1.014 2.554 19.354 5.713 41.591 5.504 19.168-.181 32.379-2.394 36.09-5.026-3.558-3.201-4.456-6.004-4.932-7.995-3.554-4.16-26.607-6.24-69.158-6.24z"
          fill="url(#prefix__paint23_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M138.145 141.741c4.497 1.136 14.976 2.81 17.113 2.773 2.136-.037 5.709 15.511 5.485 16.891-.224 1.379-21.168-6.166-22.598-7.955-1.429-1.788-4.496-12.845 0-11.709z"
          fill="url(#prefix__paint24_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.183 270.314c3.153-6.269 24.87-64.552 25.089-77.906.22-13.354 4.216-40.744 15.861-40.653 11.645.091 35.737 11.121 39.679 14.071 3.941 2.951 7.587 15.711 7.587 22.765 0 3.483.056 24.458 0 45.769-.053 20.517 6.624 41.337 6.987 42.183-18.397 6.103-90.325 3.011-95.203-6.229z"
          fill="url(#prefix__paint25_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.183 270.314c3.153-6.269 24.87-64.552 25.089-77.906.22-13.354 4.216-40.744 15.861-40.653 11.645.091 35.737 11.121 39.679 14.071 3.941 2.951 7.587 15.711 7.587 22.765 0 3.483.056 24.458 0 45.769-.053 20.517 6.624 41.337 6.987 42.183-18.397 6.103-90.325 3.011-95.203-6.229z"
          fill="url(#prefix__paint26_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M222.328 158.919c3.322-2.81 7.979-8.421 10.602-11.751 2.622-3.329 17.137 11.838 14.311 15.642-2.826 3.804-8.525 10.863-11.294 12.921-2.77 2.059-16.94-14.002-13.619-16.812z"
          fill="url(#prefix__paint27_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M155.043 205.4c6.364 4.117 49.708 16.099 54.525 14.331 4.818-1.768 34.879-38.047 36.565-41.983 1.687-3.936-19.501-25.728-22.033-22.403-2.532 3.326-23.494 29.393-25.848 29.393-2.353 0-27.508-21.08-34.87-22.273-7.362-1.193-12.798 7.778-14.198 12.478-1.4 4.701-.505 26.341 5.859 30.457z"
          fill="url(#prefix__paint28_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M155.043 205.4c6.364 4.117 49.708 16.099 54.525 14.331 4.818-1.768 34.879-38.047 36.565-41.983 1.687-3.936-19.501-25.728-22.033-22.403-2.532 3.326-23.494 29.393-25.848 29.393-2.353 0-27.508-21.08-34.87-22.273-7.362-1.193-12.798 7.778-14.198 12.478-1.4 4.701-.505 26.341 5.859 30.457z"
          fill="url(#prefix__paint29_linear)"
        />
        <g filter="url(#prefix__filter1_i)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M139.338 104.252c8.718-2.817 1.069-14.856 4.159-14.856 1.281 0 6.449-.989 7.787-3.784 2.967-6.196-3.831-11.72-20.741-10.43-28.894 2.2-30.422 32.164-27.98 47.158s-29.562 60.524-19.475 80.02c10.088 19.497 30.277 12.031 47.455-4.99 17.178-17.02 12.654-74.715 8.152-77.465-4.504-2.75-8.075-12.836.643-15.653z"
            fill="url(#prefix__paint30_radial)"
          />
        </g>
        <mask
          id="prefix__l"
          maskUnits="userSpaceOnUse"
          x={81}
          y={74}
          width={71}
          height={140}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M139.338 104.252c8.718-2.817 1.069-14.856 4.159-14.856 1.281 0 6.449-.989 7.787-3.784 2.967-6.196-3.831-11.72-20.741-10.43-28.894 2.2-30.422 32.164-27.98 47.158s-29.562 60.524-19.475 80.02c10.088 19.497 30.277 12.031 47.455-4.99 17.178-17.02 12.654-74.715 8.152-77.465-4.504-2.75-8.075-12.836.643-15.653z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#prefix__l)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M140.828 121.264c0 5.884-11.218 79.79-21.283 85.561-10.065 5.771 31.073 5.508 31.073-5.516 0-11.023-9.79-85.929-9.79-80.045z"
            fill="url(#prefix__paint31_linear)"
          />
        </g>
        <g opacity={0.6}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.39 28.324c15.642 0 28.324 12.681 28.324 28.324 0 15.643-12.681 28.324-28.325 28.324-15.643 0-28.324-12.68-28.324-28.324 0-15.643 12.681-28.324 28.324-28.324z"
            fill="url(#prefix__paint32_radial)"
          />
          <mask
            id="prefix__m"
            maskUnits="userSpaceOnUse"
            x={23}
            y={28}
            width={57}
            height={57}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M51.39 28.324c15.642 0 28.324 12.681 28.324 28.324 0 15.643-12.681 28.324-28.325 28.324-15.643 0-28.324-12.68-28.324-28.324 0-15.643 12.681-28.324 28.324-28.324z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#prefix__m)" fill="#fff">
            <mask id="prefix__n">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M51.735 37.305v20.38l9.326 9.326"
              />
            </mask>
            <path
              d="M51.735 57.685h-6v2.485l1.757 1.757 4.243-4.242zm-6-20.38v20.38h12v-20.38h-12zm1.757 24.622l9.327 9.327 8.485-8.486-9.326-9.326-8.486 8.485z"
              mask="url(#prefix__n)"
            />
          </g>
        </g>
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={66.465}
          y1={322.531}
          x2={10.274}
          y2={322.531}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9E5F6" stopOpacity={0.713} />
          <stop offset={1} stopColor="#B2C6EA" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={89.096}
          y1={318.451}
          x2={47.667}
          y2={290.536}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ACC5E9" />
          <stop offset={0.627} stopColor="#D3E3FB" />
          <stop offset={1} stopColor="#EAF2FF" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={17.129}
          y1={284.997}
          x2={15.67}
          y2={308.398}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#86A8D9" />
          <stop offset={1} stopColor="#BCD0F2" />
        </linearGradient>
        <linearGradient
          id="prefix__paint4_linear"
          x1={29.944}
          y1={139.322}
          x2={29.944}
          y2={301.511}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#80D4AE" />
          <stop offset={1} stopColor="#4CB67D" />
        </linearGradient>
        <linearGradient
          id="prefix__paint5_linear"
          x1={29.028}
          y1={192.469}
          x2={29.028}
          y2={209.421}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#64DEA8" />
          <stop offset={1} stopColor="#4CB67D" />
        </linearGradient>
        <linearGradient
          id="prefix__paint6_linear"
          x1={14.367}
          y1={236.91}
          x2={14.367}
          y2={257.986}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#64DEA8" />
          <stop offset={1} stopColor="#4CB67D" />
        </linearGradient>
        <linearGradient
          id="prefix__paint7_linear"
          x1={33.151}
          y1={223.166}
          x2={33.151}
          y2={235.994}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#64DEA8" />
          <stop offset={1} stopColor="#4CB67D" />
        </linearGradient>
        <linearGradient
          id="prefix__paint8_linear"
          x1={46.438}
          y1={142.988}
          x2={46.438}
          y2={167.27}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#64DEA8" />
          <stop offset={1} stopColor="#4CB67D" />
        </linearGradient>
        <linearGradient
          id="prefix__paint10_linear"
          x1={250.117}
          y1={333.21}
          x2={246.153}
          y2={355.01}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#47689B" />
          <stop offset={1} stopColor="#223762" />
        </linearGradient>
        <linearGradient
          id="prefix__paint11_linear"
          x1={216.847}
          y1={323.957}
          x2={272.947}
          y2={349.935}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A5BEEC" />
          <stop offset={1} stopColor="#7B90B6" />
        </linearGradient>
        <linearGradient
          id="prefix__paint12_linear"
          x1={219.23}
          y1={312.48}
          x2={219.23}
          y2={290.353}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8DA6D5" />
          <stop offset={1} stopColor="#6A87BD" />
        </linearGradient>
        <linearGradient
          id="prefix__paint13_linear"
          x1={107.767}
          y1={359.036}
          x2={85.227}
          y2={327.812}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#001C44" />
          <stop offset={1} stopColor="#89A3D0" />
        </linearGradient>
        <linearGradient
          id="prefix__paint14_linear"
          x1={68.602}
          y1={340.468}
          x2={76.219}
          y2={364.33}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70B8F9" />
          <stop offset={1} stopColor="#3D82F0" />
        </linearGradient>
        <linearGradient
          id="prefix__paint15_linear"
          x1={92.775}
          y1={343.157}
          x2={87.769}
          y2={364.357}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70B8F9" stopOpacity={0.01} />
          <stop offset={1} stopColor="#0042A6" />
        </linearGradient>
        <linearGradient
          id="prefix__paint16_linear"
          x1={28.806}
          y1={349.129}
          x2={36.068}
          y2={371.689}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#47689B" />
          <stop offset={1} stopColor="#223762" />
        </linearGradient>
        <linearGradient
          id="prefix__paint17_linear"
          x1={61.758}
          y1={297.636}
          x2={83.935}
          y2={362.601}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5973A7" />
          <stop offset={1} stopColor="#B2C7EE" stopOpacity={0.01} />
        </linearGradient>
        <linearGradient
          id="prefix__paint18_linear"
          x1={196.737}
          y1={272.932}
          x2={169.241}
          y2={317.855}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.5} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.01} />
        </linearGradient>
        <linearGradient
          id="prefix__paint19_linear"
          x1={127.758}
          y1={336.617}
          x2={134.693}
          y2={319.566}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8DA6D5" />
          <stop offset={1} stopColor="#6A87BD" />
        </linearGradient>
        <linearGradient
          id="prefix__paint20_linear"
          x1={157.365}
          y1={82.451}
          x2={137.421}
          y2={99.987}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70A6F9" />
          <stop offset={1} stopColor="#3D82F0" />
        </linearGradient>
        <linearGradient
          id="prefix__paint21_linear"
          x1={152.244}
          y1={123.838}
          x2={131.81}
          y2={139.344}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#023786" />
          <stop offset={1} stopColor="#3D82F0" />
        </linearGradient>
        <linearGradient
          id="prefix__paint22_linear"
          x1={261.706}
          y1={141.103}
          x2={250.917}
          y2={131.967}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1861BD" />
          <stop offset={1} stopColor="#3D82F0" />
        </linearGradient>
        <linearGradient
          id="prefix__paint23_linear"
          x1={94.333}
          y1={291.465}
          x2={174.28}
          y2={291.465}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#88A1C8" />
          <stop offset={0.343} stopColor="#B7CAE6" />
          <stop offset={1} stopColor="#DFEBFF" />
        </linearGradient>
        <linearGradient
          id="prefix__paint24_linear"
          x1={150.289}
          y1={138.547}
          x2={141.843}
          y2={153.196}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F7FF" />
          <stop offset={1} stopColor="#A7BCDE" />
        </linearGradient>
        <linearGradient
          id="prefix__paint25_linear"
          x1={123.734}
          y1={175.533}
          x2={53.256}
          y2={209.276}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#EAEFFF" />
        </linearGradient>
        <linearGradient
          id="prefix__paint26_linear"
          x1={164.595}
          y1={179.771}
          x2={109.804}
          y2={174.979}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.01} />
          <stop offset={1} stopColor="#D8E1F0" />
        </linearGradient>
        <linearGradient
          id="prefix__paint27_linear"
          x1={213.287}
          y1={158.665}
          x2={233.1}
          y2={186.492}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1F7FF" />
          <stop offset={1} stopColor="#A7BCDE" />
        </linearGradient>
        <linearGradient
          id="prefix__paint28_linear"
          x1={124.039}
          y1={171.306}
          x2={129.302}
          y2={226.253}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#E9F0FC" />
        </linearGradient>
        <linearGradient
          id="prefix__paint29_linear"
          x1={175.404}
          y1={204.563}
          x2={186.211}
          y2={236.011}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.01} />
          <stop offset={1} stopColor="#ABBFD6" />
        </linearGradient>
        <linearGradient
          id="prefix__paint31_linear"
          x1={116.3}
          y1={176.767}
          x2={139.909}
          y2={182.411}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#001630" stopOpacity={0.062} />
          <stop offset={1} stopColor="#081E41" />
        </linearGradient>
        <radialGradient
          id="prefix__paint3_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(150.84 14.325 76.518) scale(98.3102 303.852)"
        >
          <stop stopColor="#64CF9B" />
          <stop offset={1} stopColor="#ADF9A9" />
        </radialGradient>
        <radialGradient
          id="prefix__paint9_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(126.923 203.908 116.715) scale(273.955 303.665)"
        >
          <stop stopColor="#EDF3FD" />
          <stop offset={0.409} stopColor="#DCE8FB" />
          <stop offset={1} stopColor="#AEBDD8" />
        </radialGradient>
        <radialGradient
          id="prefix__paint30_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(26.131 -151.922 255.815) scale(47.0106 120.659)"
        >
          <stop stopColor="#3162AE" />
          <stop offset={1} stopColor="#223762" />
        </radialGradient>
        <radialGradient
          id="prefix__paint32_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-22.49783 43.91357 -82.51848 -42.27592 67.822 41.516)"
        >
          <stop stopColor="#CBDAF1" />
          <stop offset={1} stopColor="#7089B9" />
        </radialGradient>
        <filter
          id="prefix__filter0_i"
          x={-7.379}
          y={113.264}
          width={90.802}
          height={163.797}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-8} dy={-6} />
          <feGaussianBlur stdDeviation={15} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.269084 0 0 0 0 0.79451 0 0 0 0 0.470313 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="prefix__filter1_i"
          x={63.115}
          y={59.993}
          width={88.844}
          height={153.955}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-18} dy={-15} />
          <feGaussianBlur stdDeviation={13.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.0404334 0 0 0 0 0.104774 0 0 0 0 0.223875 0 0 0 0.409562 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h457v378H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
