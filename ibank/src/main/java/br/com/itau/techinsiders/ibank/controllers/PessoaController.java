package br.com.itau.techinsiders.ibank.controllers;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
 
import br.com.itau.techinsiders.ibank.models.Pessoa;
import br.com.itau.techinsiders.ibank.repository.PessoaRepository;
 
@RestController
public class PessoaController {
 
    @Autowired
    private PessoaRepository pessoaRepository;
 
    @PostMapping(path = "/pessoas", consumes = "application/json", produces = "application/json")
    public Pessoa addNovaUsuario(@RequestBody Pessoa novoUsuario) {
        Pessoa pessoaInserida = pessoaRepository.save(novoUsuario);
        return pessoaInserida;
    }
 
}