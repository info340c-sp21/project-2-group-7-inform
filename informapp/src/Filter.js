// 'use strict';
import './style.css'
import React, { useState } from 'react';
import { toggleElementInArray } from './array.js';
import { Dropdown, DropdownToggle, DropdownMenu} from 'reactstrap'; //Dropdown Item removed
// Ian & Leon

export default function Filter(props) {
  // const [filteredTrack, setFilteredTrack] = useState([
  //   'BIO', 'DS', 'HCI', 'IA', 'IAC'
  // ]);
  // console.log(filteredTrack);

  // const [filteredQuarter, setFilteredQuarter] = useState([
  //   'SU21', 'AU21','WI22', 'SP22'
  // ]);
  // console.log(filteredQuarter);

  // const [filteredOffering, setFilteredOffering] = useState([
  //   'INFO', 'NON-INFO'
  // ]);
  // console.log(filteredOffering);

  // const courseFilter = {filteredTrack, filteredQuarter, filteredOffering};

  return(
    <div className="background-image">
      <div className="container">
        <div className="title">
          <div className="container">
            <div className="titles">
              <div className="title-one">
                <h1 className="headerone">
                  <span className="logo">&nbsp;</span>INFOrm
                </h1>
              </div>
              <div className="title-two">
                <h2 className="headertwo">
                  Browse Informatics Courses
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="search">
          <DropdownFilters 
            trackToDisplay={props.filteredTrack} 
            quarterToDisplay={props.filteredQuarter} 
            offeringToDisplay={props.filteredOffering}
            setTrack={props.setFilteredTrack}
            setQuarter={props.setFilteredQuarter}
            setOffering={props.setFilteredOffering} />
        </div>
      </div>
    </div>
  );
}

function DropdownFilters(props) {
  let tracks = ['BIO', 'DS', 'HCI', 'IA', 'IAC'];
  let quarter = ['SU21', 'AU21','WI22', 'SP22'];
  let offering = ['INFO', 'NON-INFO'];

  return(
    <div className="dropdown-filters">

      <FilterDropdown options={props.trackToDisplay} 
        changeOptionCallback={props.setTrack}
        displayedOptions={tracks}
        name="Tracks" />
      <FilterDropdown options={props.quarterToDisplay} 
        changeOptionCallback={props.setQuarter}
        displayedOptions={quarter}
        name="Quarter" />
      <FilterDropdown options={props.offeringToDisplay} 
        changeOptionCallback={props.setOffering}
        displayedOptions={offering}
        name="Offering" />

    </div>
  )
}


function FilterDropdown (props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  let dropdownOptions = props.displayedOptions.map(filterItem => {
    return <Checkboxes key={filterItem} 
            entryKey={filterItem} 
            entryName={filterItem}
            selectedKeys={props.options}
            onSelectionChangeCallBack={props.changeOptionCallback}
            /> ;
  });
  
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {props.name}
      </DropdownToggle>
      <DropdownMenu className="checkbox-menu" > 
        {dropdownOptions}
      </DropdownMenu>
    </Dropdown>
  );
}

// makes a single checkbox line
function Checkboxes (props) {
  const toggleSelection = () => props.onSelectionChangeCallBack(
    toggleElementInArray(props.entryKey, props.selectedKeys)
  )

  return(

    <li onClick={toggleSelection} className="checkbox-menu">
      <label aria-label={props.entryName}>
        <input type="checkbox" checked={props.selectedKeys.indexOf(props.entryKey) !== -1} onChange={toggleSelection} aria-label={props.entryName} />
        {props.entryName}
      </label>
    </li>

  );
}

