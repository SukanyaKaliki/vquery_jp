import React, { Component } from 'react';
import './AppliedJobs.css';
import experience from './icons/experience.png';
import location from './icons/location.png';

class AppliedJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ''
            };

        this.handleChangeComments = this.handleChangeComments.bind(this);
        this.submitComments = this.submitComments.bind(this);

        //this.state = {firstName: '', lastName: '', emailAddress: '', type: '', contactNumber : '', password : '', confirmPassword: ''};
        this.appliedJobs = [{"jobId":"1", "jobTitle":"Software Engineer", "experience":"12-15yrs", "location":"banglore","keySkills":"java,angular js","savedJob":'false', "comments":''},
        {"jobId":"2", "jobTitle":"Software Engineer2", "experience":"12-25yrs", "location":"banglore2","keySkills":"java,angular js2","savedJob":'false', "comments":''},
        {"jobId":"33", "jobTitle":"Software Engineer3", "experience":"12-35yrs", "location":"banglore3","keySkills":"java,angular js1","savedJob":'true', "comments":''}];
      }

      handleChangeComments(event) {
        this.setState({comments: event.target.value});
      }

      submitComments(jobId, event) {
        alert('Interview feedback was submitted: ' + jobId+' '+this.state.comments);
        //event.preventDefault();
      }

      
   render() {
       var length = this.appliedJobs.length;
       var rows = [];
       Object.keys(this.appliedJobs).map((key, index)=> {        
            rows.push(
            <div key={key}>
                <div className={"savedJobsDiv"} >
                    <div className={"JobsDiv"}>
                        <div className={"jobTitleDiv"}>{this.appliedJobs[key].jobTitle}</div>
                        <div className={"experienceDiv"}>
                            <img src={ experience } className={"image"} />
                            {this.appliedJobs[key].experience} <img src={ location } className={"image"} /> {this.appliedJobs[key].location}
                        </div>
                    </div>
                </div>
                
                    <div>
                        <div>Job Details:</div>
                        <div>Interview Date:</div>
                        <div>Status:</div>
                        <div>Feedback:</div>
                        <div>
                            <form onSubmit={(event) => this.submitComments(this.appliedJobs[key].jobId, event)}>
                                <div className={'labelDiv'}>
                                    <label>
                                        Comments:
                                        <textarea value={this.state.value} placehlder="Please give your valuable feedback here." className={'textarea'} onChange={this.handleChangeComments} />
                                    </label>
                                </div>
                                <input type="submit" className={'submitBtn'} value="Submit >" />
                            </form>
                        </div>
                    </div>
                
            </div>
            );
       });
      return (
         <div>
            <h2>Applied Jobs</h2>
            {rows}
         </div>         
      );
   }
}

export default AppliedJobs;