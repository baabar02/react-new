import { Sidebaritem } from "@/components/Sidebaritem"; 
import { CircleUser,UsersRound,Clock,Bookmark,Users,FileVideo, Store, Image   } from "lucide-react";

const Home = () => {
    
    
    const sideBarItems = [
        {
          icon: "https://example.com/profile-pic.jpg",
          name: "Baabar",
          text: "ads"
        },
        {
          icon: <UsersRound />,
          name: "Freinds",
          text:"naizuud"
        },
        {
          icon: <Clock />,
          name: "Memories",
          text:"dursamj"
        },
        {
          icon: <Bookmark />,
          name: "Saved",
          text:"hadgalsan"
        },
        {
          icon: <Users />,
          name: "Groups",
          text:"buleg"
        },
        {
          icon: <FileVideo />,
          name: "Video",
          text: "bichleg"
        },
        {
          icon: <Store />,
          name: "Marketplace",
          text:"zah"
        },
      ];
    
      return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "darkgrey", width:"300px" }}>
          {sideBarItems.map(({ icon, name: itemName, text }, index) => {
          

            return <Sidebaritem key={index} haha={icon} item={itemName}  text={text}/>;
          })}
        </div>
      );
    };

    
    export default Home;