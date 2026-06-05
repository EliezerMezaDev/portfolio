---
startDate: "2026-01"
endDate: "Actualidad"
company: "Betty Travel"
position: "Desarrollador Full Stack"
type: "Freelance"
location: "Remoto"
tech:
  - "fastapi"
  - "langgraph"
  - "langchain"
  - "flutter"
  - "nextjs"
  - "postgresql"
---

Desarrollo del agente IA de viajes corporativos para cliente confidencial del sector Travel Tech, con arquitectura conversacional multimodal (voz + texto) y automatización de reservas de vuelos.

- **Backend:** API principal con **FastAPI** (async nativo + WebSocket), integración a **Sabre REST APIs** (GDS) para cotización BFM, creación de PNR y emisión automática de boletos
- **Agente IA:** Grafo de estados con **LangGraph**, RAG semántico con pgvector y **Claude 3.5 Haiku** vía AWS Bedrock para consulta automática de políticas corporativas
- **Frontend móvil:** App iOS/Android en **Flutter 3.x** con SDK livekit\_client para voz en tiempo real
- **Panel admin:** Dashboard multitenant en **Next.js + shadcn/ui** con gestión de empresas, carga de políticas PDF y visualización con Recharts
