package br.com.api.produtos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.produtos.model.ProdutoModel;
import br.com.api.produtos.service.ProdutoServico;

@RestController
public class ProdutoController {

    @Autowired
    private ProdutoServico ps;

    @GetMapping("/listar")
    public Iterable<ProdutoModel> listar(){
        
        return ps.listar();

    }

    @GetMapping("/")
    public String rota(){
        return "API de produtos funcionando!";
    }
    
}
