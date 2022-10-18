require('dotenv').config()

Feature('login');

Scenario('POST - Authentication', async ({ I }) => {
    const response = await I.sendPostRequest('/auth/login', {
        "email": "cartos@admin.com",
        "password": "admin"
    })
    I.seeResponseCodeIs(200)
    await I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(data.type).to.be.equal('bearer')
        process.env.ACCESS_TOKEN = data.token
     })
})
Scenario('GET - List User', async ({ I }) => {
    I.amBearerAuthenticated(secret(process.env.ACCESS_TOKEN));
    I.sendGetRequest('/digital-account/v1/backoffice/users?bankId=001')
    I.seeResponseCodeIs(200)
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(data.limit).to.be.equal(10)
    })
})
