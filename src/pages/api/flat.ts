import { NextApiRequest, NextApiResponse } from "next"

const flats: string[] = [
    "Software Developer",
    "Database Administrator",
    "Network Architect",
    "Cybersecurity Analyst",
    "Data Scientist",
    "Web Developer",
    "DevOps Engineer",
    "Cloud Architect",
    "Artificial Intelligence/Machine Learning Engineer",
]



export default function handler(req: NextApiRequest,
    res: NextApiResponse) {
    res.status(200).json(flats)
}