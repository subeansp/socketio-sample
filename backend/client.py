import httpx

res = httpx.get("http://localhost:8000")

print(res.status_code)
print(res.json())
