"use client";
import { createContext, useState, ReactNode, useContext } from "react";

interface ExperienceInterface {
    title: string;
    startDate: Date;
    endDate: Date | "present";
    description: string;
}

interface EditInterface {
    isEdit: boolean;
    handleEdit: () => void;
    useremail:string;
    handleEmail:string;
    About: string;
    handleAbout: (about: string) => void;
    Experience: ExperienceInterface[];
    handleExperience: (experience: ExperienceInterface[]) => void;
}

// Creating context with default values
export const EditorDetails = createContext<EditInterface|any>(null);

interface ProviderProps {
    children: ReactNode;
}

const EditorContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [useremail,handleEmail]=useState(null);
    const [about, setAbout] = useState("Default about text");
    const [experience, setExperience] = useState<ExperienceInterface[]>([
        { title: "UI Designer", startDate: new Date(2020, 0, 1), endDate: "present", description: "Designing UI components" }
    ]);

    const handleEdit = () => setIsEdit((prev) => !prev);
    const handleAbout = (newAbout: string) => setAbout(newAbout);
    const handleExperience = (newExperience: ExperienceInterface[]) => setExperience(newExperience);

    return (
        <EditorDetails.Provider value={{useremail,handleEmail, isEdit, handleEdit, about: about, handleAbout, experience: experience, handleExperience }}>
            {children}
        </EditorDetails.Provider>
    );
};
const useEditor=()=>{
    const context=useContext(EditorDetails);
    if(!context)
        return console.error("Outisde of Context");
    return context;
}
export {EditorContextProvider,useEditor};
