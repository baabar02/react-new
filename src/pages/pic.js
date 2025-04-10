import Photos from "@/components/photos";

const Pic = () => {

    return (
        <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "16px", 
            padding: "16px" 
        }}>
            <Photos width="400px"/>
        </div>
    );
};

export default Pic;