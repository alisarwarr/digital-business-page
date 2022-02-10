//MATERIAL-UI
import useMediaQuery from '@mui/material/useMediaQuery';
//COMPONENTS
import Detail from './Detail';
import Form from './Form';


function FirstSection() {
    const screen980 = useMediaQuery('(max-width:980px)');
    const screen900 = useMediaQuery('(max-width:900px)');
    const screen860 = useMediaQuery('(max-width:860px)');
    const screen700 = useMediaQuery('(max-width:700px)');
    const screen410 = useMediaQuery('(max-width:410px)');
    const screen400 = useMediaQuery('(max-width:400px)');
    const screen370 = useMediaQuery('(max-width:370px)');


    return (
        /*!w-[103rem] for stretching screen wallpaper*/
        <div
            className={`
                firstsection !w-[103rem] ${!screen700?(screen980?`h-[82%]`:`h-[100%]`):``} flex items-center justify-center flex-col p-20
                ${!screen900?(!screen980?`mt-[143rem]`:`mt-[141.5rem]`):`mt-[143rem]`}
            `} id="top"
        >
            <div
                className={`
                    w-full flex items-center justify-around ${screen700?`flex-col`:`flex-row`}
                    ${!screen370?(!screen400?(!screen410?(screen700&&`mt-[75.5rem]`):`mt-[78.5rem]`):`mt-[78rem]`):`mt-[80.75rem]`}
                    ${!screen700&&`ml-[-3.75rem]`}
                `}
            >
                <div className={`${screen860?`mt-14`:`mt-0.5`}`}>
                    <Detail
                    />
                </div>

                <div className={`${!screen700?(screen860?`mt-28`:`mt-24`):`mt-[3.25rem]`}`}>
                    <Form
                    />
                </div>
            </div>
        </div>
    )
}

export default FirstSection;