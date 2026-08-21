"use client"
const StartButton = ({ buttonText }: any) => {
    return (
        <div style={next_button_style.container}>
            <div style={next_button_style.rectangle}></div>
            <div style={next_button_style.curve}></div>
            <div style={next_button_style.text} className=" px-2">{buttonText || "Submit"}</div>
        </div>
    );
};

const next_button_style: any = {
    container: {
        position: 'relative',
        width: '150px',
        height: '35px',
        cursor: 'pointer',
    },
    rectangle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#0095DA',
        borderRadius: '999px', // fully rounded pill
    },
    curve: {
        position: 'absolute',
        right: '0px',
        top: '0px',
        width: '30px',
        height: '100%',
        backgroundColor: '#F9BE00',
        borderTopRightRadius: '999px',
        borderBottomRightRadius: '999px',
        clipPath: 'path("M 5 -1 C 52 15 -9 33 4 58 L 40 58 L 40 2 Z")',
    },
    text: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        whitespace:'no-wrap',
        transform: 'translate(-50%, -50%)',
        // fontFamily: 'Inter',
        // fontWeight: 500,
        fontSize: '16px',
        color: '#FFFFFF',
    }
};

export default StartButton;
