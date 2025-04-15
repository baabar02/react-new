const Home = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center",
            height: "auto",
            width: "377px",
            borderRadius: "6px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", 
          }}
        >
          <h1 style={{fontSize:28}}>To-Do List</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              justifyContent: "center",
              width: 345,
            }}
          >
            <input
              style={{
                height: 36,
                border: "0.3px solid grey",
                width: "280px",
                borderRadius: "6px",
              }}
              type="text"
              placeholder="Add a new task"
            ></input>
            <button
              style={{
                height: "40px",
                width: "59px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#3C82F6",
                color: "white",
              }}
            >
              Add
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "row", width: 345, gap: 6 }}>
            <button
              style={{
                marginTop: 20,
                height: 32,
                width: 38,
                border: "none",
                borderRadius: 6,
                backgroundColor: "#3C82F6",
                color: "white",
              }}
            >
              All
            </button>
            <button
              style={{
                marginTop: 20,
                height: 32,
                width: 60,
                border: "none",
                borderRadius: 6,
              }}
            >
              Active
            </button>
            <button
              style={{
                marginTop: 20,
                height: 32,
                width: 87,
                border: "none",
                borderRadius: 6,
              }}
            >
              Completed
            </button>
            <button style={{marginTop:20, marginLeft:"80px",marginRight:"20x", height:32, width:60, border:"none", borderRadius:6}}>
              Add</button>
          </div>
          <div>
          <div style={{display:"flex", width:345, height:62, marginTop:20, border:"0.3px solid grey", borderRadius:"6px", justifyContent:"space-between", alignItems:"center", backgroundColor:"#F9FAFB"}}>
            <label style={{height:"20px", width:"20px", marginLeft:"20px", border:"0.5px solid grey", borderRadius:"6px", display:"inline-block"}}></label>
            <button style={{height:"30", width:"67", marginRight:"20px", border:"none", color:"red", backgroundColor:"transparent" }}>Delete</button>
          </div>
          <div style={{display:"flex", width:345, height:62, marginTop:20, border:"0.3px solid grey", borderRadius:"6px", justifyContent:"space-between", alignItems:"center", backgroundColor:"#F9FAFB"}}>
            <label style={{height:"20px", width:"20px", marginLeft:"20px", border:"0.5px solid grey", borderRadius:"6px", display:"inline-block"}}></label>
            <button style={{height:"30", width:"67", marginRight:"20px", border:"none", color:"red", backgroundColor:"transparent" }}>Delete</button> 
          </div>
          <div style={{ display: "flex",
               justifyContent: "space-between",
               marginTop: "20px",
               borderTop: "0.3px solid grey",
               width: "345px",
               padding: "10px 0",
               alignItems:"center",
               backgroundColor: "#F9FAFB"}}>
          <p>1 of 2 tasks Completed</p>
          <button style={{height:"30px", color:"red", border:"none",backgroundColor:"transparent"}}>Clear completed</button>
          </div>
          

          </div>
          <p style={{ marginTop:"30px",color: "grey" }}>No tasks yet. Add one above!</p>
          <div>
            <p style={{ color: "grey" }}>
              Powered by
              <button style={{ border: "none", background: "transparent" }}>
                Pinecone Academy
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;

//   <div
//   style={{
//     ...,
//     transition: "background-color 0.2s",
//     ":hover": { backgroundColor: "#EDF2F7" },
//   }}
// ></div>