package br.com.api.produtos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.produtos.model.ProdutoModel;
import br.com.api.produtos.model.ResponseModel;
import br.com.api.produtos.repository.ProdutoRepository;

@Service
public class ProdutoServico {

    @Autowired
    private ProdutoRepository pr;

    @Autowired
    private ResponseModel rm;

    //Método para listar todos os produtos
    public Iterable<ProdutoModel> listar(){
        return pr.findAll();
    }

    //Método para listar 1 produto
    // public Iterable<ProdutoModel> listarPorId(long id){        
    //     return pr.findById(id);
    // }

    //Método para cadastrar ou alterar produtos
    public ResponseEntity<?> cadastrarAlterar(ProdutoModel pm, String acao){
        if (pm.getName().equals("")) {
            rm.setMensagem("O nome do produto é obrigatorio");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST);
        }else if(pm.getMarca().equals("")){
            rm.setMensagem("O nome da marca é obrigatório");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST);
        }else{
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<ProdutoModel>(pr.save(pm), HttpStatus.CREATED);
            }else{
                return new ResponseEntity<ProdutoModel>(pr.save(pm), HttpStatus.OK);
            }
        }        
    } 
    
    //Método para remover produtos
    public ResponseEntity<ResponseModel> remover(long id){
        pr.deleteById(id);
        rm.setMensagem("O produto foi removido com sucesso!");
        return new ResponseEntity<ResponseModel>(rm, HttpStatus.OK);
    }
}
