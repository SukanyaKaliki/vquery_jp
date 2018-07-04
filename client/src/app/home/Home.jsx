import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './Home.css';

import experience from './icons/experience.png';
import location from './icons/location.png';
import blackStar from './icons/star-black.png';
import redStar from './icons/star-red.png';

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {keyword: '', location: '', keySkills:'', workExp:''};
        this.showAdvancedSearchFields = 'false';
        this.keywordChange = this.keywordChange.bind(this);
        this.locationChange = this.locationChange.bind(this);
        this.keySkillsChange = this.keySkillsChange.bind(this);
        this.workExpChange = this.workExpChange.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
        this.advanceSearch = this.advanceSearch.bind(this);

        this.applyForJob = this.applyForJob.bind(this);
        this.saveJob = this.saveJob.bind(this);
        this.unSaveJob = this.unSaveJob.bind(this);

        //this.state = {firstName: '', lastName: '', emailAddress: '', type: '', contactNumber : '', password : '', confirmPassword: ''};
        this.allJobs = [{"jobId":"1", "jobTitle":"Software Engineer", "experience":"12-15yrs", "location":"banglore","keySkills":"java,angular js","savedJob":'false'},
        {"jobId":"2", "jobTitle":"Software Engineer2", "experience":"12-25yrs", "location":"banglore2","keySkills":"java,angular js2","savedJob":'false'},
        {"jobId":"33", "jobTitle":"Software Engineer3", "experience":"12-35yrs", "location":"banglore3","keySkills":"java,angular js1","savedJob":'true'}];
      }

      advanceSearch() {
        this.showAdvancedSearchFields = 'true';
      }

      keywordChange(event) {
        this.state.keyword = event.target.value;
      }

      locationChange(event) {
        this.state.location = event.target.value;
      }

      keySkillsChange(event) {
        this.state.keySkills = event.target.value;
      }

      workExpChange(event) {
        this.state.workExp = event.target.value;
      }

      searchSubmit(event) {
        alert('submit:::'+this.state.keyword+' '+this.state.location +' '+this.state.keySkills+' '+this.state.workExp);
      }

      applyForJob(jobId) {
        alert('Job applied successfully:::'+jobId);
        //event.preventDefault();
      }

      saveJob(index, jobId, event) {
        this.allJobs[index].savedJob = 'true';
        alert('Saved job successfully:::'+jobId +' '+index);
      }

      unSaveJob(index, jobId, event) {
        this.allJobs[index].savedJob = 'false';
        alert('Un Saved job successfully:::'+jobId+' '+index);
      }
      
   render() {
       var length = this.allJobs.length;
       var rows = [];
       Object.keys(this.allJobs).map((key, index)=> {          
            rows.push(
            <div className={"allJobsDiv"} key={key}>
                <div className={"JobsDiv"}>
                    <div className={"jobTitleDiv"}>{this.allJobs[key].jobTitle}</div>
                    <div className={"experienceDiv"}>
                        <img src={ experience } className={"image"} />
                        {this.allJobs[key].experience} <img src={ location } className={"image"} /> {this.allJobs[key].location}
                    </div>
                    <div className={"keySkillsDiv"}>Key Skills : {this.allJobs[key].keySkills}     
                        <img src={ blackStar } className={this.allJobs[key].savedJob === 'true'? 'hidden' : 'image'} onClick={(e) => this.saveJob(key, this.allJobs[key].jobId, e)}/>
                        <img src={ redStar } className={this.allJobs[key].savedJob === 'true'? 'image' : 'hidden'} onClick={(e) => this.unSaveJob(key, this.allJobs[key].jobId, e)}/>
                    </div>
                    <div><button onClick={() => this.applyForJob(this.allJobs[key].jobId)}>Apply</button></div>
                </div>
            </div>
            );
       });
      return (
         <div>
            <h2>All Jobs</h2>
            <form onSubmit={(event) => this.searchSubmit(event)}>
                
                    <label className={'required'}>
                        Keyword
                        <input type="text" required className={'textBox'} value={this.state.value} onChange={this.keywordChange}/>
                    </label>
                    <label>
                        Location
                        <input type="text" className={'textBox'} value={this.state.value} onChange={this.locationChange}/>
                    </label>
                    <label className={this.showAdvancedSearchFields === 'true' ? 'show':'hidden'}>
                        Keyskills
                        <input type="text" className={'textBox'} value={this.state.value} onChange={this.keySkillsChange}/>
                    </label>
                    <label className={this.showAdvancedSearchFields === 'true' ? 'show':'hidden'}>
                    Work Experience
                        <select className={'typeInput'} value={this.state.value} onChange={this.workExpChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                        </select>
                        </label>
                <input type="submit" className={'submitBtn'} value="Search" />
            </form>
            <div className={this.showAdvancedSearchFields === 'true' ? 'hidden':'show'}><a href="" onClick={(e) => { this.advanceSearch(e) }}>Advanced Search</a></div>
            {rows}
         </div>         
      );
   }
}

export default Home;