const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/analyze', (req, res) => {
    const { creatinine, age, gender } = req.body;
    
    let analysis = "የኩላሊትዎ ሁኔታ በመደበኛ ደረጃ ላይ ያለ ይመስላል።";
    if (creatinine > 1.4) {
        analysis = "የ Creatinine መጠን ከፍ ያለ ስለሆነ የህክምና ባለሙያ ማማከር ይመከራል።";
    }

    res.json({
        status: "success",
        message: `እድሜ: ${age}, Creatinine: ${creatinine} mg/dL። ${analysis}`
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
