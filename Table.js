import React from 'react'
import './Table.css'
import  { useState } from 'react';
import{FaTrophy} from "react-icons/fa";
 import{HiOutlineSortDescending} from  "react-icons/hi";
 import{RiArrowDropDownLine} from "react-icons/ri"; 
 import { IoReorderThree } from 'react-icons/io5';
  import{PiSquaresFourFill} from 'react-icons/pi';
const Table = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const [isHovering1, setIsHovering1] = useState(false);
  const handleMouseEnter1= () => {
    setIsHovering1(true);
  };
  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };
  const [isHovering2, setIsHovering2] = useState(false);
  const handleMouseEnter2= () => {
    setIsHovering2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };
  return (
    <div className="Main">
      <div className="Sidebar" id="side1"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <div className="top">
      <PiSquaresFourFill id="margin"/>
      General
      <RiArrowDropDownLine id={isHovering ? "Icon1" : "Icons"}/>
      </div>
      <ul>
        <li>user</li>
        <li>Announcement</li>
        <li>System Config</li>
        <li>Judge Server</li>
      </ul>
      </div>
      <div  className="Sidebar" id="side2" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} >
      <div className="top">
      <IoReorderThree id="margin"/>
      Problem
      <RiArrowDropDownLine id={isHovering1? "Icon2" :"Icons" }/>
      </div>
      <ul>
        <li>Problem List</li>
        <li>Create Problem</li>
      </ul>
      </div>
      <div  className="Sidebar" id="side3" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} >
      <div className="top">
      <FaTrophy id="margin"/>
      Contest
      <RiArrowDropDownLine id={isHovering2 ? "Icon3" : "Icons"}/>
      </div>
      <ul>
        <li>Problem List</li>
        <li>Create Problem</li>
      </ul>
      </div>
    </div>
  );
}
export default Table

