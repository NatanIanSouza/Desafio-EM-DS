$(document).ready(function() {

    $('#pol1').click(function(e) {
        e.preventDefault()

        let page = $(this).attr('href')

        $('.modal-title').empty()
        $('.modal-body').empty()

        switch (page) {
            case 'cps':
                $('.modal-title').append('Centro Paula Souza')
                $('.modal-body').append('<div class=text-center><img src="imagens/centropaulasouza394.jpg" style="width: 90%;"></div> <br> <p><strong>História do CPS:</strong> O Centro Paula Souza (CPS) é uma autarquia do Governo do Estado de São Paulo, vinculada à Secretaria de Desenvolvimento Econômico. Presente  em 369 municípios, a instituição administra 223 Escolas Técnicas (Etecs) e 74 Faculdades de Tecnologia (Fatecs) estaduais, com mais de 322 mil alunos em cursos técnicos de nível médio e superiores  tecnológicos.</p> <p>A instituição também é reconhecida como Instituto de Ciência e Tecnologia (ICT), uma organização sem fins lucrativos de administrações públicas ou privadas, que têm como principal objetivo a criação e o incentivo a pesquisas científicas e tecnológicas.</p> <p>Em setembro de 2021, o Centro Paula Souza foi reconhecido como Instituto de Ciência e Tecnologia (ICT). Este reconhecimento, que era pleiteado junto ao Conselho das Instituições de Pesquisa do Estado de São Paulo (Consip), desde 2019, representou um divisor de águas para o CPS. Como ICT, a instituição pode atuar na área de pesquisa, buscar oportunidades de novas parcerias com setor privado e, sobretudo, apoiar o Estado de São Paulo na geração de novos negócios com base tecnológica, contribuindo para a ampliar sua competitividade.</p>')
                $('#modal-info').modal('show')
                break
            default:
                alert('Link não encontrado')
        }
    })

    $('#pol2').click(function(e) {
        e.preventDefault()

        let page = $(this).attr('href')

        $('.modal-title').empty()
        $('.modal-body').empty()

        switch (page) {
            case 'etec':
                $('.modal-title').append('Etec de Lins')
                $('.modal-body').append('<div class=text-center><img src="imagens/eteclins.jpg" style="width: 90%;"></div> <br> <p><strong>História da Etec de Lins:</strong> A Escola Técnica Estadual Centro Paula Souza Unidade Lins , teve como finalidade de implantação gerar mão de obra qualificada e especializada para atender o mercado regional compreendendo uma população em torno de 300 mil habitantes. Com a publicação da Secretaria da Educação que não manteria mais os cursos Técnicos vinculados àquela Secretaria, pois o mesmo não fazia parte dos objetivos a ela atribuídos, sentiu-se a necessidade de atender os anseios da população que clamava pela oportunidade do ensino gratuito e de qualidade.</p> <p>No ano de 1998, mais precisamente no mês de agosto, foi implantado como Classe Descentralizada da ETEC Profª Helcy Moreira Martins Aguiar, do município de Cafelândia com convênio Centro Paula Souza e Secretaria da Educação e iniciaram-se duas turmas do Curso Técnico em Administração, sendo uma diurna e outra noturna, funcionando em salas emprestadas pela escola EE Fernando Costa na cidade de Lins.</p> <br>  <div class="text-center"><img src="imagens/eteclins2.jpg" style="width: 70%;"></div> <br><p>A ideia original seria de que todos os cursos técnicos mantidos pela escola EE Fernando Costa seriam passados para o Centro Paula Souza. No primeiro semestre de 1999, iniciou-se uma turma do Curso Técnico em Edificações e outra do Técnico em Enfermagem. Havia um acerto prévio de que no 2º semestre de 1999, os Cursos Técnicos em Mecânica, Eletrotécnica e Eletrônica, viessem também a integrar os cursos oferecidos pelo Centro Paula Souza em Lins, porém, os professores dos referidos cursos optaram por permanecer vinculados à Secretaria da Educação. Como não ocorreu tal transferência de cursos, o Centro Paula Souza passou a oferecer o Curso de Qualificação de Auxiliar de Enfermagem.</p> <p>A ETEC é reconhecida como uma excelente escola, tanto pela qualidade de ensino como pelas oportunidades de estágios e empregos que sua exemplar com as diversas empresas e com o setor Público oferece a seus alunos.</p>')
                $('#modal-info').modal('show')
                break
            default:
                alert('Link não encontrado')
        }
    })

    $('#pol3').click(function(e) {
        e.preventDefault()

        let page = $(this).attr('href')

        $('.modal-title').empty()
        $('.modal-body').empty()

        switch (page) {
            case 'ds':
                $('.modal-title').append('Desenvolvimento de Sistemas')
                $('.modal-body').append('<div class=text-center><img src="imagens/codes2.jpg" style="width: 90%;"></div> <br> <p>O Técnico em Desenvolvimento de Sistemas desenvolve programas para computadores e outros dispositivos computacionais como, por exemplo, aparelhos celulares e tablets, visando a automação de todos os processos relativos às Tecnologias de Informação e Comunicação (TIC), ou seja, seu trabalho envolve a produção de software e sua integração com processos administrativos, comerciais, hospitalares, industriais, de automação residencial, automação industrial, de serviços, de telecomunicações e de teleprocessamento.</p> <br> <div class=text-center><img src="imagens/desenvolvimentosistemas.png" style="width: 75%;"></div> <br> <p>O curso de DS tem duração de três anos. Nesse período o aluno absorve conhecimentos voltados à análise, projeto, atualização e criação de sistemas de informação. Durante a formação os tecnólogos passam por experiências similares às que serão vividas no âmbito profissional, focando sua formação em um viés mais prático.</p> <p><strong>Grade de Ensino:</strong> Bando de Dados; Programação Web; Lógica de Programação; Redes de Computadores; Segurança de Softwares; Programação Mobile; Análise de Projetos e Sistemas; Fundamentos da Informática.</p> <p><strong>Ferramentas Utilizadas:</strong> Visual Studio Code, XAMPP, Workbench MySQL, Android Studio, Adalo, NetBeans, Repl.it, entre muitos outros.</p>')
                $('#modal-info').modal('show')
                break
            default:
                alert('Link não encontrado')
        }
    })
})