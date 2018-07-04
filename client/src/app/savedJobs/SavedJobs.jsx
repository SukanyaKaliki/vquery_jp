import React, { Component } from 'react';
import './SavedJobs.css';
import experience from './icons/experience.png';
import location from './icons/location.png';
import blackStar from './icons/star-black.png';
import redStar from './icons/star-red.png';

class SavedJobs extends Component {
    constructor(props) {
        super(props);

        this.applyForJob = this.applyForJob.bind(this);

        //this.state = {firstName: '', lastName: '', emailAddress: '', type: '', contactNumber : '', password : '', confirmPassword: ''};
        this.savedJobs = [{"jobId":"1", "jobTitle":"Software Engineer", "experience":"12-15yrs", "location":"banglore","keySkills":"java,angular js","savedJob":'false'},
        {"jobId":"2", "jobTitle":"Software Engineer2", "experience":"12-25yrs", "location":"banglore2","keySkills":"java,angular js2","savedJob":'false'},
        {"jobId":"33", "jobTitle":"Software Engineer3", "experience":"12-35yrs", "location":"banglore3","keySkills":"java,angular js1","savedJob":'true'}];
      }

      applyForJob(jobId, event) {
        alert('Job applied successfully:::'+jobId);
        //event.preventDefault();
      }
      
   render() {
       var length = this.savedJobs.length;
       var rows = [];
       Object.keys(this.savedJobs).map((key, index)=> {
            rows.push(
            <div className={"savedJobsDiv"} key={key}>
                <div className={"JobsDiv"}>
                    <div className={"jobTitleDiv"}>{this.savedJobs[key].jobTitle}</div>
                    <div className={"experienceDiv"}>
                        <img src={ experience } className={"image"} />
                        {this.savedJobs[key].experience} <img src={ location } className={"image"} /> {this.savedJobs[key].location}
                    </div>
                    <div><button onClick={(e) => this.applyForJob(this.savedJobs[key].jobId, e)}>Apply</button></div>
                </div>
            </div>
            );
       });
      return (
         <div>
            <h2>Saved Jobs</h2>
            {rows}
         </div>         
      );
   }
}

export default SavedJobs;