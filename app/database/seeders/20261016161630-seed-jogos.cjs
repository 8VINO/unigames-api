'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('jogos', [
      {
        nome: 'ARK: Survival Ascended',
        descricao: 'Responda a uma nova experiência de sobrevivência de dinossauros além dos seus sonhos mais selvagens ... como Ark é reimaginado desde o início até a próxima geração da tecnologia de videogame com o Unreal Engine 5! Você acorda em uma ilha misteriosa, seus sentidos sobrecarregados com a luz do sol ofuscante e as cores brilhantes pulando todas as superfícies ao seu redor, as águas azuis de uma ilha verdejante lambendo seus pés descalços. Um rugido profundo ecoa da selva enevoada, agitando -o em ação, e você se levanta - sem medo, mas intrigado. Você está pronto para formar uma tribo, domar e criar centenas de espécies de dinossauros e outras criaturas primitivas, explorar, criar, construir e lutar contra o topo da cadeia de alimentos? Seu novo mundo aguarda ... passe pelo vidro e junte-se!',
        ano_lancamento: 2023,
        preco: 220.90,
        imagem: 'https://pvyekhvgvdyxqwbxdmbf.supabase.co/storage/v1/object/public/jogos/capas_jogos/jogo_1792177668448.jpg',
        desenvolvedora_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Euro Truck Simulator 2',
        descricao: 'Viaje pela Europa como o rei das estradas, um caminhoneiro que entrega cargas importantes por distâncias impressionantes! Com dezenas de cidades para explorar no Reino Unido, Bélgica, Alemanha, Itália, Holanda, Polónia e muito mais, a sua resistência, habilidade e velocidade serão levadas ao limite. Se você tem o que é preciso para fazer parte de uma força de transporte rodoviário de elite, sente-se ao volante e prove!',
        ano_lancamento: 2012,
        preco: 61.99,
        imagem: 'https://pvyekhvgvdyxqwbxdmbf.supabase.co/storage/v1/object/public/jogos/capas_jogos/jogo_1_1792177737920.jpg',
        desenvolvedora_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Hogwarts Legacy',
        descricao: 'Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado no mundo introduzido pela primeira vez nos livros do Harry Potter. Embarque em uma jornada por locais novos e familiares enquanto explora e descubra animais fantásticos, personalize seu personagem e crie poções, domine o lançamento de feitiços, aprimore talentos e torne-se o bruxo que deseja ser.Experimente Hogwarts da década de 1800. Seu personagem é um estudante com chave de um antigo segredo que ameaça destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas e decida o destino do mundo bruxo. Seu legado é o que você faz dele. Viva o Inesperado.',
        ano_lancamento: 2023,
        preco: 249.99,
        imagem: 'https://pvyekhvgvdyxqwbxdmbf.supabase.co/storage/v1/object/public/jogos/capas_jogos/jogo_1_1792177765638.jpg',
        desenvolvedora_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jogos', null, {});
  }
};