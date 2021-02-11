import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import {ReactComponent as Up} from '../../../assets/Up.svg';
import {ReactComponent as Down} from '../../../assets/Down.svg';
import {ReactComponent as Globe} from '../../../assets/Globe.svg';

import './QuestionsPage.scss'

function QuestionPage() {
    return (
        <div className='page'>

        <div className='side-bar-section'>
        <div className='side-bar-components'>

            <NavLink exact activeClassName='active' className='home nav_link' to='/' >
                <p>Home</p>
            </NavLink>

            <div className='public-tabs'>
                <p className='title fc-light'>PUBLIC</p>
                <NavLink className='active icon-link nav_link' to='/questions' >
                    <p>
                    <Globe className='icon'/>    Stack Overflow
                    </p>
                </NavLink>
                <NavLink activeClassName='active' className='link nav_link' to='/tags' >
                    <p>Tags</p>
                </NavLink>
                <NavLink activeClassName='active' className='link nav_link' to='/users' >
                    <p>Users</p>
                </NavLink>
                <NavLink activeClassName='active' className='link nav_link' to='/jobs' >
                    <p>Jobs</p>
                </NavLink>
            </div>
            <div className='teams-tabs'>
                <p className='title fc-light'>TEAMS</p>
            </div>
        </div>
    </div>

          
    <div id='mainbar' className='questions-section fc-black-800' style={{padding:'15px'}}>
        <div className='section-grid'>
            <h3 className='section-head'>Adding external css in an html file</h3>
            <div>
                <Link>
                    <button style = {{marginRight:'40px'}}
                        className = "s-btn s-btn__primary"   
                    >
                        Ask a Question
                    </button>
                </Link>
            </div>
        </div>
        
        <div className='sections-tabs'>
            <span><span style = {{color:'grey'}}> Asked </span> 11 years, 1 month ago <span style = {{color:'grey'}}> Active </span> 1 year ago <span style = {{color:'grey'}}> Viewed </span> 87k times </span>    
        </div>
        <div className='questions'>
            
                    

                <div>
                        
                    <div className='answer'>
                            <div className='answers'>
                                <div className='answer-layout'>
                                    <div className='arrow-cell'>
                                        <div className='arrow-container'>
                                            <button
                                                className='arrow-up'
                                                
                                            >
                                                <Up className='icon'/>
                                            </button>
                                            <div className='vote-count fc-black-500'>35</div>
                                            <button
                                                className='arrow-down'
                                                
                                            >
                                                <Down className='icon'/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='answer-part'>
                                        <div className='answer-text fc-black-800'>
                                            <p>I know I can include CSS on my page like this:</p>
                                        </div>
                                        <div className='answer-results'>
                                            <div className='buttons-act'>
                                                <div style={{width:'100%',padding:'10px',backgroundColor:'#eeeeee'}}>
                                                        <p>
                                                            &lt;style&gt;<br/>
                                                                .style <br/>
                                                                .. <br/>
                                                                 <br/>
                                                            &lt;/style&gt; <br/>


                                                        </p>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                        <div className='answer-text fc-black-800'>
                                            <p>How do I add an external stylesheet file in an HTML page?</p>
                                        </div>

                                        <div className='answer-results'>
                                            <div className='buttons-act'>
                                                <div className='answer-menu' style={{fontSize:'14px',color:'#73726e'}}>
                                                    <Link className='answer-links' title='short permalink to this question' to='/' >
                                                        Share
                                                    </Link>
                                                    <Link className='answer-links' title='Follow this question to receive notifications' to='/'>
                                                        Improve this question
                                                    </Link>
                                                    <Link className='answer-links' title='Follow this question to receive notifications' to='/'>
                                                        Follow
                                                    </Link>
                                                    
                                                    
                                                </div>
                                            </div>
                                            <div className='owner' style={{float: 'left', backgroundColor: '#fff'}}>
                                                <div className='user-block fc-black-500'>
                                                    <div className='action-time'>edited Jun 29 '11 at 19:45</div>
                                                    <div className='user-logo'>
                                                        <Link className='user-link' >
                                                            <div className='logo-wrapper'>
                                                                <img alt='user_logo' src=""/>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className='user-profile'>
                                                        <Link className='user-profile-link fc-blue-600' >random</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='owner' style={{float: 'left', backgroundColor: '#e1ecf4'}}>
                                                <div className='user-block fc-black-500'>
                                                    <div className='action-time'>asked Dec 22 '09 at 17:22</div>
                                                    <div className='user-logo'>
                                                        <Link className='user-link' >
                                                            <div className='logo-wrapper'>
                                                                <img alt='user_logo' src=""/>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className='user-profile'>
                                                        <Link className='user-profile-link fc-blue-600' >Programer</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='answer-results'>
                                            <div className='buttons-act'>
                                                <div className='answer-menu'>
                                                    <Link className='answer-links' title='short permalink to this question' to='/'>
                                                        add a comment
                                                    </Link>                                                    
                                                </div>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>


                        </div>



                        <div className='answer'>
                            <div className='answer-header fc-black-800'>
                                <div className='answer-sub-header'>
                                    <div className='answer-headline'>
                                        <h2>Answers</h2>
                                    </div>

                                </div>
                            </div>



                            <div className='answers'>
                                <div className='answer-layout'>
                                    <div className='arrow-cell'>
                                        <div className='arrow-container'>
                                            <button
                                                className='arrow-up'
                                                 
                                            >
                                                <Up className='icon'/>
                                            </button>
                                            <div className='vote-count fc-black-500'>35</div>
                                            <button
                                                className='arrow-down'
                                                 
                                            >
                                                <Down className='icon'/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='answer-part'>
                                        <div className='answer-text fc-black-800'>
                                            <p>In your HEAD, add:</p>
                                        </div>
                                        <div className='answer-results'>
                                            <div className='buttons-act'>
                                                <div style={{width:'100%',padding:'10px',backgroundColor:'#eeeeee'}}>
                                                        <p>
                                                        here the code will come need to add that will do that later


                                                        </p>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                        <div className='answer-text fc-black-800'>
                                            <p>the css file itself does not contain <span style = {{backgroundColor:'#eeeeee',fontSize:'12px',padding:'2px'}}>&lt;style&gt;</span> tags.</p>
                                        </div>

                                        <div className='answer-results'>
                                            <div className='buttons-act'>
                                                <div className='answer-menu' style={{fontSize:'14px',color:'#73726e'}}>
                                                    <Link className='answer-links' title='short permalink to this question' to='/' >
                                                        Share
                                                    </Link>
                                                    <Link className='answer-links'  to='/'>
                                                        Improve this Answer
                                                    </Link>
                                                    <Link className='answer-links'  to='/'>
                                                        Follow
                                                    </Link>
                                                    
                                                    
                                                </div>
                                            </div>
                                            
                                            <div className='owner' style={{float: 'left', backgroundColor: 'white'}}>
                                                <div className='user-block fc-black-500'>
                                                    <div className='action-time'>answered Dec 22 '09 at 17:23</div>
                                                    <div className='user-logo'>
                                                        <Link className='user-link' >
                                                            <div className='logo-wrapper'>
                                                                <img alt='user_logo' src=""/>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className='user-profile'>
                                                        <Link className='user-profile-link fc-blue-600' >Pekka</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='answer-results'>
                                            <div className='buttons-act'>
                                                <div className='answer-menu'>
                                                    <Link className='answer-links' title='short permalink to this question' to='/'>
                                                        add a comment
                                                    </Link>                                                    
                                                </div>
                                            </div>
                                        </div> 


                                        <div className='comments-section'>
                                            <div className='comments'>
                                                <ul className='comments-part'>
                                                    
                                                        <li className='comments-division' >
                                                            <div className='comment-text fc-black-800'>
                                                                <div className='comment-body'>
                                                                    <span className='body'>
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;you forgot <span style = {{backgroundColor:'#eeeeee',fontSize:'12px',padding:'2px'}}>media="screen"</span> and <span style = {{backgroundColor:'#eeeeee',fontSize:'12px',padding:'2px'}}>title="mycss"</span> - 
                                                                    </span>
                                                                    <span
                                                                        style={{color: 'blue'}}
                                                                        className='date fs-body1'
                                                                    >
                                                                        Jonno_FTW 
                                                                    </span>
                                                                    <span
                                                                        style={{color: '#959ca3 !important'}}
                                                                        className='date fs-body1'
                                                                    >
                                                                        Dec 22 '09 at 17:25
                                                                    </span>
                                                                </div>
                                                                    
                                                            </div>
                                                        </li>



                                                        <li className='comments-division' >
                                                            <div className='comment-text fc-black-800'>
                                                                <div className='comment-body'>
                                                                    <span className='body'>
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;@Jonno_FTW Those are not required. Default behaviour is good enough for almost all common situations. – 
                                                                    </span>
                                                                    <span
                                                                        style={{color: 'blue'}}
                                                                        className='date fs-body1'
                                                                    >
                                                                         ceejayoz 
                                                                    </span>
                                                                    <span
                                                                        style={{color: '#959ca3 !important'}}
                                                                        className='date fs-body1'
                                                                    >
                                                                        Dec 22 '09 at 17:29
                                                                    </span>
                                                                </div>
                                                                    
                                                            </div>
                                                        </li>
                                                    
                                                        <li className='comments-division' >
                                                            <div className='comment-text fc-black-800'>
                                                                <div className='comment-body'>
                                                                    <span className='body'>
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;@Jonno_FTW Those are not required. Default behaviour is good enough for almost all common situations. – 
                                                                    </span>
                                                                    <span
                                                                        style={{color: 'blue'}}
                                                                        className='date fs-body1'
                                                                    >
                                                                         ceejayoz 
                                                                    </span>
                                                                    <span
                                                                        style={{color: '#959ca3 !important'}}
                                                                        className='date fs-body1'
                                                                    >
                                                                        Dec 22 '09 at 17:29
                                                                    </span>
                                                                </div>
                                                                    
                                                            </div>
                                                        </li>
                                                    
                                                </ul>



                                            </div>
                                        
                                        </div>


   
                                    </div>
                                </div>
                            </div>





                            <div className='add-answer'>
                                <form className='answer-form'>
                                    <div className='answer-grid'>
                                        <label className=' fc-black-800'>Your Answer</label>
                                        <textarea
                                            className='s-textarea'
                                            name='text'
                                            cols='30'
                                            rows='12'
                                            value="text"
                                            placeholder='Enter body with minimum 30 characters'
                                            id='text'>
                                        </textarea>
                                        <button className='s-btn s-btn__primary'>Post Your Answer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    
                    
                    </div>


                    
                    
                        
                  
            
                
        </div>
    </div>

    <div id='sidebar' className='side-bar' style={{padding:'20px',width:'400px'}}>
        <div className="s-sidebarwidget s-sidebarwidget__yellow s-anchors s-anchors__grayscale mb16" data-tracker="cb=1">
                <ul className="d-block p0 m0">
                    <div
                        className="s-sidebarwidget--header s-sidebarwidget__small-bold-text d:fc-black-900 bb bbw1">
                        The Overflow Blog
                    </div>
                    <li className="s-sidebarwidget--item grid px16">
                        <div className="grid--cell1 fl-shrink0">
                            <svg style={{color: '#f2f2f3'}} aria-hidden="true" className="va-text-top svg-icon iconPencilSm" width="14" height="14"
                                viewBox="0 0 14 14">
                                <path
                                    d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/>
                            </svg>
                        </div>
                        <div className="grid--cell">
                            <Link 
                                className="js-gps-track"
                                data-ga="[&quot;community bulletin board&quot;,&quot;The Overflow Blog&quot;,&quot;https://stackoverflow.blog/2020/07/13/tales-from-documentation-write-for-your-dumbest-user/&quot;,null,null]"
                                data-gps-track="communitybulletin.click({ priority: 1, position: 0 })">Podcast 308: What are the young developers into? Everyone’s getting AWS…
                                </Link>
                        </div>
                    </li>
                    <li className="s-sidebarwidget--item grid px16">
                        <div className="grid--cell1 fl-shrink0">
                            <svg style={{color: '#f2f2f3'}} aria-hidden="true" className="va-text-top svg-icon iconPencilSm" width="14" height="14"
                                viewBox="0 0 14 14">
                                <path
                                    d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/>
                            </svg>
                        </div>
                        <div className="grid--cell">
                            <Link 
                                className="js-gps-track"
                                data-ga="[&quot;community bulletin board&quot;,&quot;The Overflow Blog&quot;,&quot;https://stackoverflow.blog/2020/07/14/podcast-252-a-conversation-on-diversity-and-representation/&quot;,null,null]"
                                data-gps-track="communitybulletin.click({ priority: 1, position: 1 })">Learn to program BASIC with a Twitter bot</Link>
                        </div>
                    </li>
                    
                    <div
                        className="s-sidebarwidget--header s-sidebarwidget__small-bold-text d:fc-black-900 bb bbw1">
                        Featured on Meta
                    </div>
                    <li className="s-sidebarwidget--item grid px16">
                        <div className="grid--cell1 fl-shrink0">
                            <div className="favicon favicon-stackexchangemeta" title="Meta Stack Exchange">
                            </div>
                        </div>
                        <div className="grid--cell">
                            <Link 
                                className="js-gps-track"
                                data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackexchange.com/questions/350184/feedback-post-new-moderator-reinstatement-and-appeal-process-revisions&quot;,null,null]"
                                data-gps-track="communitybulletin.click({ priority: 3, position: 3 })">Opt-in alpha test for a new Stacks editor</Link>
                        </div>
                    </li>
                    <li className="s-sidebarwidget--item grid px16">
                        <div className="grid--cell1 fl-shrink0">
                            <div className="favicon favicon-stackexchangemeta" title="Meta Stack Exchange">
                            </div>
                        </div>
                        <div className="grid--cell">
                            <Link 
                                className="js-gps-track"
                                title="The new moderator agreement is now live for moderators to accept across the network"
                                data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackexchange.com/questions/350544/the-new-moderator-agreement-is-now-live-for-moderators-to-accept-across-the-netw&quot;,null,null]"
                                data-gps-track="communitybulletin.click({ priority: 3, position: 4 })">
                                Visual design changes to the review queues</Link>
                        </div>
                    </li>
                    

                </ul>
            </div>
                
                


        <div className='side-bar-tags'>
                <h4 className='tag-headline'>Linked</h4>
                
                    <div className = "row">

                        <div className = "col-2">
            
                        <Link
                            className='s-link s-link__secondary'
                            style={{padding: '3px 15px',color:'black',backgroundColor:'#eeeeee',fontSize:'13px'}}
                            
                        >
                            0
                        </Link>
                        </div>

                        <div className = "col-10">
                        
                        <Link className='show-tags' to='/tags' >Beginner, how do I add CSS in a different file than the HTML file?</Link>

                        </div>

                    </div>



                    <div className = "row">

                        <div className = "col-2">
            
                        <Link
                            className='s-link s-link__secondary'
                            style={{padding: '3px 15px',color:'black',backgroundColor:'#eeeeee',fontSize:'13px'}}
                            
                        >
                            1
                        </Link>
                        </div>

                        <div className = "col-10">
                        
                        <Link className='show-tags' to='/tags' >How to use css and javascript in html only</Link>

                        </div>

                    </div>



                    <div className = "row">

                        <div className = "col-2">
            
                        <Link
                            className='s-link s-link__secondary'
                            style={{padding: '3px 15px',color:'black',backgroundColor:'#eeeeee',fontSize:'13px'}}
                            
                        >
                            0
                        </Link>
                        </div>

                        <div className = "col-10">
                        
                        <Link className='show-tags' to='/tags' >CSS and JS can't load in a html from bootstrap</Link>

                        </div>

                    </div>



                    <div className = "row">

                        <div className = "col-2">
            
                        <Link
                            className='s-link s-link__secondary'
                            style={{padding: '1px 1px',color:'white',backgroundColor:'#5eba7d',fontSize:'13px'}}
                            
                        >
                            -1
                        </Link>
                        </div>

                        <div className = "col-10">
                        
                        <Link className='show-tags' to='/tags' >How can one use a selector class that is written in a separate CSS file?</Link>

                        </div>

                    </div>



                    <div className = "row">

                        <div className = "col-2">
            
                        <Link
                            className='s-link s-link__secondary'
                            style={{padding: '3px 15px',color:'black',backgroundColor:'#eeeeee',fontSize:'13px'}}
                            
                        >
                            1
                        </Link>
                        </div>

                        <div className = "col-10">
                        
                        <Link className='show-tags' to='/tags' >does notepad++ have a way to connect a way to use an external style.css file.?</Link>

                        </div>

                    </div>




                    <div className = "row pt-1">

                        <div className = "col-2">
            
                        <Link
                            className='s-link s-link__secondary'
                            style={{padding: '3px 13px',color:'black',backgroundColor:'#eeeeee',fontSize:'13px'}}
                            
                        >
                            -2
                        </Link>
                        </div>

                        <div className = "col-10">
                        
                        <Link className='show-tags' to='/tags' >My text wont show; any idea why?</Link>

                        </div>

                    </div>




                    <div className = "row">

                        <div className = "col-2">
            
                        <Link
                            className='s-link s-link__secondary'
                            style={{padding: '3px 15px',color:'white',backgroundColor:'#5eba7d',fontSize:'13px'}}
                            
                        >
                            0
                        </Link>
                        </div>

                        <div className = "col-10">
                        
                        <Link className='show-tags' to='/tags' >Css question…...newbie/ beginner</Link>

                        </div>

                    </div>

            
                    <div className = "row">

                        <div className = "col-2">
            
                        <Link
                            className='s-link s-link__secondary'
                            style={{padding: '3px 13px',color:'white',backgroundColor:'#5eba7d',fontSize:'13px'}}
                            
                        >
                            -5
                        </Link>
                        </div>

                        <div className = "col-10">
                        
                        <Link className='show-tags' to='/tags' >How to link an external stylesheet in CSS</Link>

                        </div>

                    </div>

        
            
            
            
            </div>
    </div>    
                    
                

                    



    </div>

    
    )
};

export default QuestionPage
