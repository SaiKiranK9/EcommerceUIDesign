import './App.css';

function App() {
  return (
    <div className="">
      <div className='AppHeader BGColor'>
      </div>
      <nav class="nav justify-content-end FontWeightSemiBold FontSizeMedium">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">People</a>
        <a class="nav-link" href="#">Journal</a>
        <a class="nav-link ">Assignments</a>
        <a class="nav-link" href="#">Connect</a>
        <a class="nav-link ">Mails</a>
        <a class="nav-link" href="#">Blog</a>
        <a class="nav-link ">Insights</a>
        <a class="nav-link" href="#">Folders</a>
        <a class="nav-link ">Reports</a>
        <a class="nav-link" href="#">Settings</a>
      </nav>
      {/*<nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
        <div class="position-sticky">
          <div class="list-group list-group-flush ">
            <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">

            </a>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple active">

            </a>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple">

            </a>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple">

            </a>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple">

            </a>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple">

            </a>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple">

            </a>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple">

            </a>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple">

            </a>
          </div>
        </div>
  </nav>*/}
      <div className='DisplayInlineFlex'>
        <div className='MainProgressDiv BGColor BorderRadius'>
          <div></div>
          <div className='PrimaryFocalDiv FontWeightRegular FontSizeMedium FontFamilyAndStyle'>
            The primary focal area in Grade 2 are making comparisions within the base-10 place value system, solving problems
            with addition and subtraction within 1,000 and building
            foundations for multiplication.
          </div>
          <div className='DisplayFlex' style={{ marginLeft: '31px' }}>
            <i style={{ background: 'rgba(83, 164, 238, 0.1)', color: '#53A4EE' }} class="bi bi-people-fill DisplayFlex IconsStyles" />
            <div className='StudentsIcon'>
              <div className='FontFamilyAndStyle FontWeightBold FontSizeMedium' style={{ color: '#444444' }}>255</div>
              <div className='FontFamilyAndStyle FontWeightRegular FontSizeSmall' style={{ color: '#666666' }}>Students</div>
            </div>
            <i style={{ background: 'rgba(217, 182, 92, 0.1)', color: '#D9B65C' }} class="bi bi-chat-square-fill DisplayFlex IconsStyles" />
            <div className='StudentsIcon'>
              <div className='FontFamilyAndStyle FontWeightBold FontSizeMedium' style={{ color: '#444444' }}>180</div>
              <div className='FontFamilyAndStyle FontWeightRegular FontSizeSmall' style={{ color: '#666666' }}>Posts</div>
            </div>
            <i style={{ background: 'rgba(158, 132, 170, 0.1)', color: '#9E84AA' }} class="bi bi-card-text DisplayFlex IconsStyles" />
            <div className='StudentsIcon'>
              <div className='FontFamilyAndStyle FontWeightBold FontSizeMedium' style={{ color: '#444444' }}>87</div>
              <div className='FontFamilyAndStyle FontWeightRegular FontSizeSmall' style={{ color: '#666666' }}>Assignments</div>
            </div>
            <i style={{ background: 'rgba(125, 103, 103, 0.1)', color: '#7D6767' }} class="bi bi-camera-video DisplayFlex IconsStyles" />
            <div className='StudentsIcon'>
              <div className='FontFamilyAndStyle FontWeightBold FontSizeMedium' style={{ color: '#444444' }}>95</div>
              <div className='FontFamilyAndStyle FontWeightRegular FontSizeSmall' style={{ color: '#666666' }}>Videos</div>
            </div>
          </div>
        </div>
        <div className='InstructorCard BGColor BorderRadius'>
          <div className='DisplayFlex'>
            <i class="bi bi-person-fill" style={{ color: 'rgba(112, 112, 112, 0.6)', margin: '17px 0px 13px 19px' }}></i>
            <span style={{ color: 'rgba(64, 74, 77, 0.6)', margin: '17px 0px 13px 14px' }}>INSTRUCTORS</span>
          </div>
          <div style={{ width: '434px', border: '1px solid #DBDBDB', marginLeft: '20px' }} />
          <figure>
            <img src="pic_trulli.jpg" alt="Trulli" style={{ width: '48px', height: '48px', margin: '23px 0px 9px 43px' }} />
            <figcaption style={{ opacity: '0.6ss', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '400', fontSize: '12px', margin: '0px 0px 34px 34px' }}>Amy Smith</figcaption>
          </figure>
        </div>
      </div>
      <div className='DisplayFlex'>
        <div className='SkillsDiv'>
          <h1 className='KnowledgeTitle FontFamilyAndStyle'>Knowledge & Skills</h1>
          <div className='ButtonsMainDiv BGColor BorderRadius'>
            <button type="button" class="btn btn-primary MathsButton">Mathematical Process Standards</button>
            <button type="button" class="btn btn-primary AnalysisButton">Data Analysis</button>
            <button type="button" class="btn btn-primary OperationsButton">Number and Operations</button>
            <button type="button" class="btn btn-primary FinacialButton">Personal Financial Literacy</button>
            <button type="button" class="btn btn-primary GeometryButton">Geometry and Measurement</button>
            <button type="button" class="btn btn-primary AlgebraicButton">Algebraic Reasoning</button>
          </div>
        </div>
        <div >
          <h1 style={{ marginLeft: '32px' }} className='KnowledgeTitle FontFamilyAndStyle'>People</h1>
          <div className='PeopleDiv BGColor BorderRadius DisplayFlex'>
            <div>
              <div className='StudentDiv FontWeightRegular FontSizeSmall FontFamilyAndStyle'>
                STUDENTS ADDED
              </div>
              <div>
              </div>
            </div>
            <div>
              <div className='FamiliesDiv FontWeightRegular FontSizeSmall FontFamilyAndStyle'>
                FAMILIES CONNECTED
              </div>
              <div>
              </div>
            </div>
            <div>
              <div className='InsructorDiv FontWeightRegular FontSizeSmall FontFamilyAndStyle'>
                INSTRUCTORS
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='DisplayFlex'>
        <div style={{ marginLeft: '32px', marginBottom: '85px' }}>
          <div className='DisplayFlex'>
            <h1 style={{ marginTop: '59px' }} className='KnowledgeTitle FontFamilyAndStyle'>Upcoming</h1>
            <div style={{ margin: '51px 0px 14px 243px' }} className='DisplayFlex'>
              <div style={{ width: '40px', height: '40px', borderRadius: '6px', marginRight: '10px' }} className='BGColor' >
                <i class="bi bi-list-ul" style={{ color: '#0069E7', margin: '11px 0px 0px 3px' }}></i>
              </div>
              <div style={{ width: '40px', height: '40px', borderRadius: '6px' }} className='BGColor'>
                <i class="bi bi-calendar" style={{ color: '#BABABA', margin: '11px 0px 0px 3px' }}></i>
              </div>
            </div>
          </div>
          <div style={{ width: '438px' }} className='BGColor BorderRadius'>
            <div className='DisplayFlex'>
              <div>
                <div style={{ color: '#455A64', fontFamily: 'Roboto', fontStyle: 'normal', margin: '15px 220px 4px 14px' }} className='FontFamilyAndStyle FontWeightRegular'>Fun with numbers</div>
                <div style={{ color: '#FA7902', fontSize: '11px', margin: '0px 0px 15px 14px' }} className='FontFamilyAndStyle FontWeightRegular'>Assignments - 2nd Grade Math</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '11px', margin: '14px 0px 4px 0px' }}>Due on 2nd Dec</div>
                <div><i class="bi bi-star-fill" style={{ color: '#ECDCDC', margin: '0px 15px 15px 52px' }}></i></div>
              </div>
            </div>
          </div>
          <div style={{ width: '438px', marginTop: '10px' }} className='BGColor BorderRadius'>
            <div className='DisplayFlex'>
              <div>
                <div style={{ color: '#455A64', fontFamily: 'Roboto', fontStyle: 'normal', margin: '15px 137px 4px 14px' }} className='FontFamilyAndStyle FontWeightRegular'>Parent Teachers Meeting</div>
                <div style={{ color: '#F2AE00', fontSize: '11px', margin: '0px 0px 15px 14px' }} className='FontFamilyAndStyle FontWeightRegular'>Connection - Meeting</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '11px', margin: '14px 0px 4px 5px' }}>on 2nd Dec at 10:00 am</div>
                <div><i class="bi bi-star-fill" style={{ color: '#ECDCDC', margin: '0px 15px 15px 95px' }}></i></div>
              </div>
            </div>
          </div>
          <div style={{ width: '438px', marginTop: '10px' }} className='BGColor BorderRadius'>
            <div className='DisplayFlex'>
              <div>
                <div style={{ color: '#455A64', fontFamily: 'Roboto', fontStyle: 'normal', margin: '15px 220px 4px 14px' }} className='FontFamilyAndStyle FontWeightRegular'>Online Class</div>
                <div style={{ color: '#F2AE00', fontSize: '11px', margin: '0px 0px 15px 14px' }} className='FontFamilyAndStyle FontWeightRegular'>Connection - Virtual Class</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '11px', margin: '14px 0px 4px 0px' }}>on 2nd Dec at 11:30 am</div>
                <div><i class="bi bi-star-fill" style={{ color: '#ECDCDC', margin: '0px 15px 15px 90px' }}></i></div>
              </div>
            </div>
          </div>
          <div style={{ width: '438px', marginTop: '10px' }} className='BGColor BorderRadius'>
            <div className='DisplayFlex'>
              <div>
                <div style={{ color: '#455A64', fontFamily: 'Roboto', fontStyle: 'normal', margin: '15px 220px 4px 14px' }} className='FontFamilyAndStyle FontWeightRegular'>Fun with decimals</div>
                <div style={{ color: '#F2AE00', fontSize: '11px', margin: '0px 0px 15px 14px' }} className='FontFamilyAndStyle FontWeightRegular'>Assignments - 2nd Grade Math</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '11px', margin: '14px 0px 4px 0px' }}>Due on 5th Dec</div>
                <div><i class="bi bi-star-fill" style={{ color: '#ECDCDC', margin: '0px 15px 15px 52px' }}></i></div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: '32px' }}>
          <div className='DisplayFlex'>
            <h1 style={{ marginTop: '59px' }} className='KnowledgeTitle FontFamilyAndStyle'>Quick Links</h1>
            <div style={{ width: '32px', height: '28px', borderRadius: '4px', margin: '61px 0px 16px 220px', backgroundColor: '#0069E7' }}>
              <i class="bi bi-plus" style={{ color: '#FFFFFF', margin: '11px 0px 0px 3px' }}></i>
            </div>
          </div>
          <div style={{ width: '374px' }} className='BGColor BorderRadius'>
            <div className='DisplayFlex'>
              <div>
                <div style={{ color: '#4E59E0', fontFamily: 'Roboto', fontStyle: 'normal', margin: '34px 250px 16px 20px', fontSize: '16px' }} className=' FontWeightRegular'>New Post</div>
              </div>
              <div style={{ margin: '35px 25px 16px 0px' }}>
                <div><i class="bi bi-trash3" style={{ color: '#8C8C8C' }} /></div>
              </div>
            </div>
            <div style={{ width: '334px', border: '1px solid #DBDBDB', marginLeft: '20px' }} />
            <div className='DisplayFlex'>
              <div>
                <div style={{ color: '#4E59E0', fontFamily: 'Roboto', fontStyle: 'normal', margin: '16px 220px 16px 20px', fontSize: '16px' }} className=' FontWeightRegular'>New Message</div>
              </div>
              <div style={{ margin: '16px 25px 16px 0px' }}>
                <div><i class="bi bi-trash3" style={{ color: '#8C8C8C' }} /></div>
              </div>
            </div>
            <div style={{ width: '334px', border: '1px solid #DBDBDB', marginLeft: '20px' }} />
            <div className='DisplayFlex'>
              <div>
                <div style={{ color: '#4E59E0', fontFamily: 'Roboto', fontStyle: 'normal', margin: '16px 200px 16px 20px', fontSize: '16px' }} className=' FontWeightRegular'>New Assignment</div>
              </div>
              <div style={{ margin: '16px 25px 16px 0px' }}>
                <div><i class="bi bi-trash3" style={{ color: '#8C8C8C' }} /></div>
              </div>
            </div>
            <div style={{ width: '334px', border: '1px solid #DBDBDB', marginLeft: '20px' }} />
            <div className='DisplayFlex'>
              <div>
                <div style={{ color: '#4E59E0', fontFamily: 'Roboto', fontStyle: 'normal', margin: '16px 222px 86px 20px', fontSize: '16px' }} className=' FontWeightRegular'>New Connect</div>
              </div>
              <div style={{ margin: '16px 25px 16px 0px' }}>
                <div><i class="bi bi-trash3" style={{ color: '#8C8C8C' }} /></div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: '32px' }}>
          <div className='DisplayFlex'>
            <h1 style={{ marginTop: '59px' }} className='KnowledgeTitle FontFamilyAndStyle'>To Do list</h1>
            <div style={{ width: '32px', height: '28px', borderRadius: '4px', margin: '61px 0px 16px 220px', backgroundColor: '#0069E7' }}>
              <i class="bi bi-plus" style={{ color: '#FFFFFF', margin: '11px 0px 0px 3px' }}></i>
            </div>
          </div>
          <div style={{ width: '374px' }} className='BGColor BorderRadius'>
            <div className='DisplayFlex'>
              <div class="form-check" style={{ color: '#4E59E0', fontFamily: 'Roboto', fontStyle: 'normal', margin: '34px 79px 16px 20px', fontSize: '16px' }} className=' FontWeightRegular'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault" style={{ marginLeft: '9px' }}>
                  Check assignments for the week
                </label>
              </div>
              <div style={{ margin: '16px 25px 16px 0px' }}>
                <div><i class="bi bi-trash3" style={{ color: '#8C8C8C' }} /></div>
              </div>
            </div>
            <div style={{ width: '334px', border: '1px solid #DBDBDB', marginLeft: '20px' }} />
            <div className='DisplayFlex'>
              <div class="form-check" style={{ color: '#4E59E0', fontFamily: 'Roboto', fontStyle: 'normal', margin: '16px 140px 16px 20px', fontSize: '16px' }} className=' FontWeightRegular'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault" style={{ marginLeft: '9px' }}>
                  Jane's parents meeting
                </label>
              </div>
              <div style={{ margin: '16px 25px 16px 0px' }}>
                <div><i class="bi bi-trash3" style={{ color: '#8C8C8C' }} /></div>
              </div>
            </div>
            <div style={{ width: '334px', border: '1px solid #DBDBDB', marginLeft: '20px' }} />
            <div className='DisplayFlex'>
              <div class="form-check" style={{ color: '#4E59E0', fontFamily: 'Roboto', fontStyle: 'normal', margin: '16px 127px 16px 20px', fontSize: '16px' }} className=' FontWeightRegular'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault" style={{ marginLeft: '9px' }}>
                  Create my new blog post
                </label>
              </div>
              <div style={{ margin: '16px 25px 134px 0px' }}>
                <div><i class="bi bi-trash3" style={{ color: '#8C8C8C' }} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
