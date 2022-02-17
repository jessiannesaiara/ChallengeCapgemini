// TESTE QUESTÃO 1

const { ChallengeCapgemini } = require("./DesafioCapgemini");

const challenge = new ChallengeCapgemini();

// TESTE QUESTÃO 2

it("Questão 2: valid password", () => {
  expect(challenge.securePassword("M4*mjg")).toBe(`Senha Forte`);
});

it("Questão 2: password without 6 characters", () => {
  expect(challenge.securePassword("M4*b")).toBe(2);
});

it("Questão 2: password with 6 characters, but without lowercase", () => {
  expect(challenge.securePassword("M4*MMM")).toBe(
    `Verifique os critérios de senha forte e digite uma nova senha.`
  );
});

it("Questão 2: password with 6 characters, but without special character", () => {
  expect(challenge.securePassword("m4Mmmm")).toBe(
    `Verifique os critérios de senha forte e digite uma nova senha.`
  );
});

it("Questão 2: password with 6 characters, but without Uppercase", () => {
  expect(challenge.securePassword("m4*mmm")).toBe(
    `Verifique os critérios de senha forte e digite uma nova senha.`
  );
});

it("Questão 2: password with 6 characters, but without number", () => {
  expect(challenge.securePassword("m*mmmm")).toBe(
    `Verifique os critérios de senha forte e digite uma nova senha.`
  );
});

it("password undefined", () => {
  expect(challenge.securePassword()).toBe(`Informe um valor válido`);
});

// TESTE QUESTÃO 3

it("Questão 3: word with 2 anagrams", () => {
  expect(challenge.anagram("ovo")).toBe(`O total de pares de substrings que são anagramas é 2.`);
});

it("Questão 3: word without anagrams", () => {
  expect(challenge.anagram("cola")).toBe(`O total de pares de substrings que são anagramas é 0.`);
});

it("Questão 3: word undefined", () => {
  expect(challenge.anagram()).toBe(`Informe um valor válido`);
});

it("Questão 3: check if value is a string", () => {
  expect(challenge.anagram(2)).toBe(`Informe um valor válido`);
});
