import { SkillStyled } from "./styledComponents/Skill.styled";

type SkillProps = {
    item: string
}

export default function Skill({item}: SkillProps) {
  return (
    <SkillStyled>
        {item && item}
    </SkillStyled>
  )
}
