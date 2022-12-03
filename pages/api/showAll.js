import { aztecas } from '../../services/aztecas'

export default function ShowAll(req, res) {
    switch (req.method) {
        case "GET":
            return res.status(200).json(
                {
                    message: "OK",
                    result: aztecas,
                    status: 200
                }
            )
        default:
            return res.status(400).json({ message: "Bad request", status: 400 })
    }
}