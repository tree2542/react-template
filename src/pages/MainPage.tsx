import { useLocation } from "react-router-dom" //ใช้เพื่อส่งค่าผ่าน route

export default function MainPage() {
    const location = useLocation()
    console.log("NAV STATE =", location.state) //for stateTest

    const username = localStorage.getItem("username")
    const role = localStorage.getItem("role")

    const content = !username ? (
        <p>No user data</p>
    ) : (
        <>
            <h3>You are {username}</h3>
            <p>Role: {role}</p>
        </>
    )

    // console.log(user.username, user.role)

    return (
        <div style={{ padding: 24 }}>
            <h2>Welcome to my React Template</h2>
            {content}
        </div>
    );
}
