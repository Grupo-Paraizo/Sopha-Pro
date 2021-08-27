import { CognitoUserPool } from "amazon-cognito-identity-js";
const poolData = {
   UserPoolId: "sa-east-1_hXVk0aoeo",
   ClientId: "40pgq1npfl1g2c5ch402ufj60l"
}

export default new CognitoUserPool(poolData);