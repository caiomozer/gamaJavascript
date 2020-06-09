package br.com.itau.techinsiders.ibank.repository;
 
import org.springframework.data.repository.CrudRepository;
 
import br.com.itau.techinsiders.ibank.models.Pessoa;
 
public interface PessoaRepository extends CrudRepository<Pessoa, Long> {
 
}
    
