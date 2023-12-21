import { SkillStyled } from "./styledComponents/Skill.styled";

type SkillProps = {
    item: string
}

export default function Skill({item}: SkillProps) {

  function addToFilter (item: string) {
    alert(item)
  }

  return (
    <SkillStyled>
        <button onClick={() => addToFilter(item)}>{item && item}</button> 
    </SkillStyled>
  )
}
