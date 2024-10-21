import React, { useEffect, useRef } from 'react';
import { FaDragon , FaFire , FaRegSnowflake , FaGear } from "react-icons/fa6";
import { MdGrass , MdElectricBolt } from "react-icons/md";
import { CgPokemon } from "react-icons/cg";
import { IoWaterOutline } from "react-icons/io5";
import { GiPunch , GiPoisonGas, GiFairyWings  , GiNightVision ,  GiGroundbreaker , GiFluffyWing , GiPsychicWaves, GiFallingRocks , GiFloatingGhost } from "react-icons/gi";
import { GrBug } from "react-icons/gr";

const typeIcons = {
  normal: <CgPokemon />,
  fire: <FaFire />,
  water: <IoWaterOutline />,
  electric: <MdElectricBolt />,
  grass: <MdGrass />,
  ice: <FaRegSnowflake />,
  fighting: <GiPunch />,
  poison: <GiPoisonGas />,
  ground: <GiGroundbreaker />,
  flying: <GiFluffyWing />,
  psychic: <GiPsychicWaves />,
  bug: <GrBug />,
  rock: <GiFallingRocks />,
  ghost: <GiFloatingGhost />,
  dragon: <FaDragon />,
  dark: <GiNightVision />,
  steel: <FaGear />,
  fairy: <GiFairyWings />,
};

const Badge = ({ children, type }) => {
  const badgeWrapper = useRef(null);

  useEffect(() => {
    if (badgeWrapper.current) {
      const width = badgeWrapper.current.querySelector('.poke_badge').offsetWidth;
      badgeWrapper.current.style.width = `${width + 100}px`;
    }
  }, []);

  const Icon = typeIcons[type.toLowerCase()] || <CgPokemon />; 

  return (
    <div className="badge-wrapper" ref={badgeWrapper}>
      <div className={`poke_badge badge-shiny badge-${type}`}>
        {Icon} {children}
      </div>
    </div>
  );
};

export default Badge;