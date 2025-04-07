import Input from "@/components/Input";
import Button from "@/components/Button";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",

        alignItems: "center",
        height: "100vh" 
      }}
    >
  <Title/>
      <div
        style={{
          height: 396,
          width: 396,
          border: "0.5px solid grey",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          padding: "20px"
        }}
      
      >
      
        <Input border="0.5px solid grey" placeholder="Email or phone number" />
        <Input border="0.5px solid grey" placeholder="Password" />

        <Button
          text="Log In"
          backgroundColor="#1877f2" 
          color="white"
          width="364px"
        />
        <Button
          text="Forget password"
          backgroundColor="white"
          color="#1877f2"
          width="364px"
        />
        <div style={{ borderTop: "0.5px solid grey", width: 364 }}></div>
        <Button
          text="Create new account"
          backgroundColor="#42b72a" 
          color="white"
          width="194px"
        />
      </div>
    </div>
  );
}