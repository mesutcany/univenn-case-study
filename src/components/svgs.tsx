import { SVGProps } from "react"

const OverviewIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#344054"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 17h8M11.018 2.764 4.235 8.039c-.453.353-.68.53-.843.75a2 2 0 0 0-.318.65C3 9.704 3 9.991 3 10.565V17.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8v-7.235c0-.574 0-.861-.074-1.126a2.002 2.002 0 0 0-.318-.65c-.163-.22-.39-.397-.843-.75l-6.783-5.275c-.351-.273-.527-.41-.72-.462a1 1 0 0 0-.523 0c-.194.052-.37.189-.721.462Z"
        />
    </svg>
)


const JobsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#344054"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C7.28 3 8.12 3 9.8 3h4.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C19 5.28 19 6.12 19 7.8V21l-7-4-7 4V7.8Z"
        />
    </svg>
)


function TalentPoolIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <path
                stroke="#344054"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M18 15.837c1.456.731 2.704 1.905 3.615 3.373.18.29.27.436.302.637.063.409-.216.912-.597 1.073-.188.08-.398.08-.82.08M16 11.532a4.5 4.5 0 0 0 0-8.064M14 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM2.56 18.938C4.153 16.545 6.67 15 9.5 15s5.347 1.545 6.94 3.938c.35.525.525.787.505 1.122-.016.26-.187.58-.395.738-.268.202-.636.202-1.372.202H3.822c-.736 0-1.104 0-1.372-.202a1.109 1.109 0 0 1-.395-.738c-.02-.335.155-.597.504-1.122Z"
            />
        </svg>
    );
}

function InboxIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <path
                stroke="#344054"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m2 7 8.165 5.715c.661.463.992.695 1.351.784a2 2 0 0 0 .968 0c.36-.09.69-.32 1.351-.784L22 7M6.8 20h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 17.72 22 16.88 22 15.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 4 18.88 4 17.2 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.28 2 7.12 2 8.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20Z"
            />
        </svg>
    );
}

function SupportIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <path
                stroke="#344054"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.136 9.136 4.93 4.93m0 14.142 4.239-4.239m5.693.032 4.207 4.207m0-14.142-4.24 4.24M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-6 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            />
        </svg>
    );
}

function SettingsIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <path
                stroke="#344054"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            />
            <path
                stroke="#344054"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M18.727 14.727a1.5 1.5 0 0 0 .3 1.655l.055.054a1.816 1.816 0 0 1 0 2.573 1.818 1.818 0 0 1-2.573 0l-.055-.055a1.5 1.5 0 0 0-1.654-.3 1.5 1.5 0 0 0-.91 1.373v.155a1.818 1.818 0 1 1-3.636 0V20.1a1.5 1.5 0 0 0-.981-1.373 1.5 1.5 0 0 0-1.655.3l-.054.055a1.818 1.818 0 0 1-3.106-1.287 1.818 1.818 0 0 1 .533-1.286l.054-.055a1.5 1.5 0 0 0 .3-1.654 1.5 1.5 0 0 0-1.372-.91h-.155a1.818 1.818 0 1 1 0-3.636H3.9a1.5 1.5 0 0 0 1.373-.981 1.5 1.5 0 0 0-.3-1.655l-.055-.054A1.818 1.818 0 1 1 7.491 4.99l.054.054a1.5 1.5 0 0 0 1.655.3h.073a1.5 1.5 0 0 0 .909-1.372v-.155a1.818 1.818 0 0 1 3.636 0V3.9a1.499 1.499 0 0 0 .91 1.373 1.5 1.5 0 0 0 1.654-.3l.054-.055a1.817 1.817 0 0 1 2.573 0 1.819 1.819 0 0 1 0 2.573l-.055.054a1.5 1.5 0 0 0-.3 1.655v.073a1.5 1.5 0 0 0 1.373.909h.155a1.818 1.818 0 0 1 0 3.636H20.1a1.499 1.499 0 0 0-1.373.91Z"
            />
        </svg>
    )
}

function ThreeDotsIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
            {...props}
        >
            <path
                fill="#344054"
                d="M10 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM15.833 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM4.167 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z"
            />
            <path
                stroke="#344054"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM15.833 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM4.167 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z"
            />
        </svg>
    )
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
            {...props}
        >
            <path
                stroke="#667085"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.667}
                d="m17.5 17.5-2.917-2.917m2.084-5a7.083 7.083 0 1 1-14.167 0 7.083 7.083 0 0 1 14.167 0Z"
            />
        </svg>
    )
}

function SortIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 20 20"
            {...props}
        >
            <path
                stroke="#344054"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.667}
                d="M5 1v16m0 0-4-4m4 4 4-4m6 4V1m0 0-4 4m4-4 4 4"
            />
        </svg>
    )
}

function ColumnsIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
            viewBox="0 0 20 20"
            {...props}
        >
            <path
                stroke="#667085"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.667}
                d="M5.667 2.5h-.5c-.934 0-1.4 0-1.757.182-.314.16-.569.414-.728.728-.182.357-.182.823-.182 1.757v9.666c0 .934 0 1.4.182 1.757.16.314.414.569.728.728.357.182.823.182 1.757.182h.5c.933 0 1.4 0 1.756-.182.314-.16.569-.414.729-.728.181-.357.181-.823.181-1.757V5.167c0-.934 0-1.4-.181-1.757a1.667 1.667 0 0 0-.729-.728C7.067 2.5 6.6 2.5 5.667 2.5ZM14.833 2.5h-.5c-.933 0-1.4 0-1.756.182-.314.16-.569.414-.729.728-.181.357-.181.823-.181 1.757v9.666c0 .934 0 1.4.181 1.757.16.314.415.569.729.728.356.182.823.182 1.756.182h.5c.934 0 1.4 0 1.757-.182.314-.16.569-.414.728-.728.182-.357.182-.823.182-1.757V5.167c0-.934 0-1.4-.182-1.757a1.666 1.666 0 0 0-.728-.728c-.357-.182-.823-.182-1.757-.182Z"
            />
        </svg>
    )
}

function SheetsIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={18}
            fill="none"
            viewBox="0 0 20 20"
            {...props}
        >
            <path
                stroke="#667085"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.667}
                d="M6.333 14V4c0-.777 0-1.165-.126-1.471a1.667 1.667 0 0 0-.902-.902C4.998 1.5 4.61 1.5 3.834 1.5c-.777 0-1.165 0-1.472.127-.408.169-.732.493-.902.902-.127.306-.127.694-.127 1.471v10c0 .777 0 1.165.127 1.471.17.409.494.733.902.902.307.127.695.127 1.471.127.777 0 1.165 0 1.472-.127.408-.169.732-.494.902-.902.127-.306.127-.694.127-1.471ZM14.667 10.667V4c0-.777 0-1.165-.127-1.471a1.667 1.667 0 0 0-.902-.902c-.306-.127-.695-.127-1.471-.127-.777 0-1.165 0-1.471.127-.409.169-.733.493-.902.902-.127.306-.127.694-.127 1.471v6.667c0 .776 0 1.165.127 1.47.169.41.493.734.902.903.306.127.694.127 1.47.127.777 0 1.166 0 1.472-.127.408-.17.733-.494.902-.902.127-.306.127-.695.127-1.471Z"
            />
        </svg>
    )
}

function FlashIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
            {...props}
        >
            <path
                fill="#344054"
                d="m10.833 1.667-7.422 8.906c-.29.349-.436.523-.438.67a.417.417 0 0 0 .155.331c.114.093.341.093.795.093H10l-.833 6.666 7.422-8.906c.29-.349.436-.523.438-.67a.417.417 0 0 0-.155-.331c-.114-.093-.341-.093-.795-.093H10l.833-6.666Z"
            />
        </svg>
    )
}

export {
    OverviewIcon,
    JobsIcon,
    TalentPoolIcon,
    InboxIcon,
    SupportIcon,
    SettingsIcon,
    ThreeDotsIcon,
    SearchIcon,
    SortIcon,
    ColumnsIcon,
    SheetsIcon,
    FlashIcon
}