// "use client"

import { UserButton, auth, currentUser, useAuth, useUser } from "@clerk/nextjs"

const ProtectedPage = async () => {
    // const {userId} = useAuth();
    // const {user} = useUser();
    const {userId} = auth();
    const  user = await currentUser();
    return(
        <div>
            <UserButton 
            afterSignOutUrl="/"
            />
            this is {user?.firstName} with {userId}
        </div>
    )
}

export default ProtectedPage