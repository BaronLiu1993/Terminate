import React from 'react';
import {Link} from 'react-scroll'

function navbar() {

  return (
    <nav>
      <div className = 'bg-[#101628] flex-col flex items-end'>
        <ol className = 'flex p-2 justify-end '>
          <Link to = "home" spy = {true} smooth = {true} offset = {50} duration = {500} href = '#' className = 'm-4 font-semibold hover:font-extrabold text-white'>01. Home</Link>
          <Link to = "about" spy = {true} smooth = {true} offset = {50} duration = {500} href = '#' className = 'm-4 font-semibold hover:font-extrabold text-white'>02. About Me!</Link>
          <Link to = "portfolio" spy = {true} smooth = {true} offset = {50} duration = {500} href = '#' className = 'm-4 font-semibold hover:font-extrabold text-white'>03. Extracurriculars</Link>
          <Link to = "projects" spy = {true} smooth = {true} offset = {50} duration = {500} href = '#' className = 'm-4 font-semibold hover:font-extrabold text-white'>04. Projects!</Link>
        </ol>
      </div>
    </nav>
  );
}

export default navbar;
