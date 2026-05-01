from groq import Groq

client = Groq(api_key="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")

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "What is a cyclone?"}]
)

print(response.choices[0].message.content)