# Tutorial GitFlow

Este repositorio es un ejemplo práctico del flujo de trabajo GitFlow.

## 📋 Estructura de Ramas

### Ramas Principales
- **`main`**: Rama de producción. Contiene código estable y listo para desplegar.
- **`develop`**: Rama de desarrollo. Integra todas las funcionalidades completadas.

### Ramas de Soporte

#### Features (Funcionalidades)
Ramas para desarrollar nuevas características:
- `feature/login` - Sistema de autenticación de usuarios
- `feature/dashboard` - Panel de control principal
- `feature/user-profile` - Perfil de usuario

**Flujo**: Se crean desde `develop` y se fusionan de vuelta a `develop`.

#### Release (Lanzamiento)
Rama para preparar un nuevo lanzamiento:
- `release/v1.0.0` - Preparación de la versión 1.0.0

**Flujo**: Se crea desde `develop`, se fusiona a `main` y `develop`.

#### Hotfix (Corrección Urgente)
Rama para corregir bugs críticos en producción:
- `hotfix/critical-bug` - Corrección de error crítico

**Flujo**: Se crea desde `main`, se fusiona a `main` y `develop`.

## 🔄 Flujo de Trabajo GitFlow

```
main ─────────────●─────────────●──────>
                   ↑             ↑
                   │             │
              hotfix/          release/
              critical-bug     v1.0.0
                   │             ↑
develop ───────────●─────●───────●──────>
                   ↑     ↑
                   │     │
              feature/ feature/
              login    dashboard
```

## 🚀 Comandos Útiles

### Crear una rama feature
```bash
git checkout develop
git checkout -b feature/nombre-funcionalidad
```

### Crear una rama release
```bash
git checkout develop
git checkout -b release/v1.0.0
```

### Crear una rama hotfix
```bash
git checkout main
git checkout -b hotfix/nombre-bug
```

### Fusionar feature a develop
```bash
git checkout develop
git merge feature/nombre-funcionalidad
git branch -d feature/nombre-funcionalidad
```

### Fusionar release
```bash
git checkout main
git merge release/v1.0.0
git tag -a v1.0.0 -m "Versión 1.0.0"
git checkout develop
git merge release/v1.0.0
git branch -d release/v1.0.0
```

### Fusionar hotfix
```bash
git checkout main
git merge hotfix/nombre-bug
git tag -a v1.0.1 -m "Hotfix 1.0.1"
git checkout develop
git merge hotfix/nombre-bug
git branch -d hotfix/nombre-bug
```

## 📚 Recursos
- [GitFlow Original](https://nvie.com/posts/a-successful-git-branching-model/)
- [Git Flow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
