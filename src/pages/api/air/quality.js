import API from "@/sensorsafrica/lib/api";

export default async function handler(req, res) {
  try {
    const { city } = req.query;
    const response = await API.getAirData(city);
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      res.status(response.status).json({
        error: "API Error",
        message: errorData?.message || "Failed to fetch data",
        status: response.status,
      });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
