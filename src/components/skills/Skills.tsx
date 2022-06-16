import React from "react";
import s from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./skill/skill";
import {Title} from "../../common/Title/Title";
import {
    SiCss3,
    SiJavascript,
    SiRedux,
    SiHtml5,
    SiTypescript,
    SiReact, SiMaterialui, SiStorybook, SiJest
} from 'react-icons/si'
import {FaExchangeAlt, FaWpforms} from "react-icons/fa/";
import {FaGithubSquare} from "react-icons/fa";


export const Skills = () => {


    return (
        <div className={s.skillBlock}>
            <div className={`${styleContainer.container} ${s.skillContainer}`}>
                <Title text={'Skills'} style={{color: '#294861'}}/>
                <div className={s.skills}>
                    <Skill title={'JavaScript'}
                           icon={<SiJavascript color='#FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'TypeScript'}
                           icon={<SiTypescript color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'React'}
                           icon={<SiReact color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Redux/Thunk/Toolkit'}
                           icon={<SiRedux color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Formik / React-Hook-Form'}
                           icon={<FaWpforms color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'MaterialUI / AntDesign'}
                           icon={<SiMaterialui color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Git / GitHub'}
                           icon={<FaGithubSquare color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Storybook'}
                           icon={<SiStorybook color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'TDD, Jest'}
                           icon={<SiJest color=' #FFFFE0' size={'3rem'}/>}/>
                    <Skill title={'Axios'} icon={<FaExchangeAlt color='#FFFFE0' size={'3rem'}/>}/>
                </div>
            </div>
        </div>
    )
}