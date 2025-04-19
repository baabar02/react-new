import Labeltask from "./Labeltask";

const Alerttask = ({all}) => {

if(all === 0 )  
  return (
    
      <div>
      
        <button
          style={{
            marginTop: "30px",
            color: "grey",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          No tasks yet. Add one above!
        </button>
    
      <div>
        <p style={{ color: "grey" }}>
          Powered by
          <button
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "#3C82F6",
            }}
          >
            Pinecone Academy
          </button>
        </p>
      </div>
      </div>
  );

}

export default Alerttask;
