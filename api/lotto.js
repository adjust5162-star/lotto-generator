export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.OPENROUTER_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'openai/gpt-4o-mini',
            messages: [{
                role: 'user',
                content: '한국 로또 번호 6개와 보너스 번호 1개를 추천해줘. 1~45 사이 정수, 7개 모두 서로 다른 숫자여야 해. 반드시 아래 JSON 형식으로만 응답해. 다른 텍스트는 쓰지 마:\n{"main":[n1,n2,n3,n4,n5,n6],"bonus":n7}'
            }],
            max_tokens: 60
        })
    });

    const data = await response.json();
    res.status(response.status).json(data);
}
