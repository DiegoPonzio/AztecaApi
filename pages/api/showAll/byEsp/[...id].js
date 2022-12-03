import { data } from "autoprefixer"
import { aztecas } from "../../../../services/aztecas"

export default function ByCultura(req, res) {
    switch (req.method) {
        case "GET":
            const { id } = req.query
            //console.log(id)
            if (id.length === 1) {
                switch (id[0]) {
                    case "Cultura":
                        return res.status(200).json(
                            {
                                message: "OK",
                                result: aztecas.cultura,
                                status: 200
                            }
                        )
                    case "Edificaciones":
                        return res.status(200).json(
                            {
                                message: "OK",
                                result: aztecas.edificaciones,
                                status: 200
                            }
                        )
                    case "Localizacion":
                        return res.status(200).json(
                            {
                                message: "OK",
                                result: aztecas.localizacion,
                                status: 200
                            }
                        )
                    case "Leyendas":
                        return res.status(200).json(
                            {
                                message: "OK",
                                result: aztecas.leyendas,
                                status: 200
                            }
                        )
                    default:
                        return res.status(404).json(
                            {
                                message: "Error, not found",
                                status: 404
                            }
                        )
                }
            }

            if (id.length === 2 || id.length === 3) {
                switch (id[0]) {
                    case "Cultura":
                        switch (id[1]) {
                            case "Pueblo":
                                return res.status(200).json(
                                    {
                                        message: "OK",
                                        result: aztecas.cultura.pueblo,
                                        status: 200
                                    }
                                )
                            case "Caracteristicas":
                                return res.status(200).json(
                                    {
                                        message: "OK",
                                        result: aztecas.cultura.caracteristicas,
                                        status: 200
                                    }
                                )
                            case "Lengua":
                                return res.status(200).json(
                                    {
                                        message: "OK",
                                        result: aztecas.cultura.lengua,
                                        status: 200
                                    }
                                )
                            case "Comida":
                                return res.status(200).json(
                                    {
                                        message: "OK",
                                        result: aztecas.cultura.comida,
                                        status: 200
                                    }
                                )
                            case "Vestimenta":
                                return res.status(200).json(
                                    {
                                        message: "OK",
                                        result: aztecas.cultura.vestimenta,
                                        status: 200
                                    }
                                )
                            default:
                                return res.status(404).json(
                                    {
                                        message: "Error, not found",
                                        status: 404
                                    }
                                )
                        }
                    case "Edificaciones":
                        switch (id[1]) {
                            case "Templos":
                                switch (Number(id[2])) {
                                    case 1:
                                        return res.status(200).json(
                                            {
                                                message: "OK",
                                                result: aztecas.edificaciones.templos[0],
                                                status: 200
                                            }
                                        )

                                    case 2:
                                        return res.status(200).json(
                                            {
                                                message: "OK",
                                                result: aztecas.edificaciones.templos[1],
                                                status: 200
                                            }
                                        )

                                    case 3:
                                        return res.status(200).json(
                                            {
                                                message: "OK",
                                                result: aztecas.edificaciones.templos[2],
                                                status: 200
                                            }
                                        )

                                    case 4:
                                        return res.status(200).json(
                                            {
                                                message: "OK",
                                                result: aztecas.edificaciones.templos[3],
                                                status: 200
                                            }
                                        )

                                    default:
                                        return res.status(404).json(
                                            {
                                                message: "Error, not found",
                                                status: 404
                                            }
                                        )
                                }
                            default:
                                return res.status(404).json(
                                    {
                                        message: "Error, not found",
                                        status: 404
                                    }
                                )
                        }
                    case "Localizacion":
                        switch (id[1]) {
                            case "link":
                                return res.status(200).json(
                                    {
                                        message: "OK",
                                        result: aztecas.localizacion.link,
                                        status: 200
                                    }
                                )
                            default:
                                return res.status(404).json(
                                    {
                                        message: "Error, not found",
                                        status: 404
                                    }
                                )
                        }
                    case "Leyendas":
                        switch (Number(id[1])) {
                            case 1:
                                return res.status(200).json(
                                    {
                                        message: "OK",
                                        result: aztecas.leyendas.data[0],
                                        status: 200
                                    }
                                )
                            case 2:
                                return res.status(200).json(
                                    {
                                        message: "OK",
                                        result: aztecas.leyendas.data[1],
                                        status: 200
                                    }
                                )
                            case 3:
                                return res.status(200).json(
                                    {
                                        message: "OK",
                                        result: aztecas.leyendas.data[2],
                                        status: 200
                                    }
                                )

                            default:
                                return res.status(404).json(
                                    {
                                        message: "Error, not found",
                                        status: 404
                                    }
                                )
                        }
                    default:
                        return res.status(404).json(
                            {
                                message: "Error, not found",
                                status: 404
                            }
                        )
                }
            }

        default:
            return res.status(400).json({ message: "Bad request", status: 400 })
    }
}