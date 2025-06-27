Modelo de Classe Base para Entidades
TypeScript
Classe Base Entity
// Entity.ts
export abstract class Entity<T extends object> {
  private readonly _id: string
  protected props: T

  private readonly _createdAt: Date
  private _updatedAt: Date

  constructor(props: T, id?: string, createdAt?: Date, updatedAt?: Date) {
    this._id = id ?? crypto.randomUUID?.() ?? this.generateRandomId()
    this.props = props
    this._createdAt = createdAt ?? new Date()
    this._updatedAt = updatedAt ?? new Date()
  }

  private generateRandomId(): string {
    return Math.random().toString(36).substring(2)
  }

  public get id(): string {
    return this._id
  }

  public get createdAt(): Date {
    return this._createdAt
  }

  public get updatedAt(): Date {
    return this._updatedAt
  }

  protected touch(): void {
    this._updatedAt = new Date()
  }

  public equals(entity?: Entity<T>): boolean {
    if (!entity) return false
    return this._id === entity._id
  }
}
​
Exemplo de Entidade User
// User.ts
import { Entity } from './Entity'

interface UserProps {
  name: string
  email: string
}

export class User extends Entity<UserProps> {
  constructor(props: UserProps, id?: string, createdAt?: Date, updatedAt?: Date) {
    super(props, id, createdAt, updatedAt)
  }

  get name(): string {
    return this.props.name
  }

  set name(newName: string) {
    this.props.name = newName
    this.touch()
  }

  get email(): string {
    return this.props.email
  }

  set email(newEmail: string) {
    this.props.email = newEmail
    this.touch()
  }
}
​
Exemplo de criação de instância
import { User } from './User'

const user = new User({ name: "Augusto César", email: "augusto@example.com" })

console.log(user.id)          // id gerado automaticamente
console.log(user.createdAt)   // data de criação
console.log(user.updatedAt)   // data de atualização inicial

console.log(user.name)        // Augusto César
user.name = "Augusto C."
console.log(user.name)        // Augusto C.
console.log(user.updatedAt)   // data atualizada após o set
​
Java
Classe Base Entity
// Entity.java
import java.util.Objects;
import java.util.UUID;
import java.time.LocalDateTime;

public abstract class Entity<T> {
    private final String id;
    protected T props;
    private final LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public Entity(T props, String id, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = (id != null) ? id : UUID.randomUUID().toString();
        this.props = props;
        this.createdAt = (createdAt != null) ? createdAt : LocalDateTime.now();
        this.updatedAt = (updatedAt != null) ? updatedAt : LocalDateTime.now();
    }

    public String getId() {
        return id;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    protected void touch() {
        this.updatedAt = LocalDateTime.now();
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Entity<?> entity = (Entity<?>) obj;
        return Objects.equals(id, entity.id);
    }
}
​
Exemplo de Entidade User
// User.java
public class User extends Entity<UserProps> {

    public User(UserProps props, String id, LocalDateTime createdAt, LocalDateTime updatedAt) {
        super(props, id, createdAt, updatedAt);
    }

    public String getName() {
        return props.name;
    }

    public void setName(String name) {
        props.name = name;
        touch();
    }

    public String getEmail() {
        return props.email;
    }

    public void setEmail(String email) {
        props.email = email;
        touch();
    }
}

// UserProps.java
public class UserProps {
    public String name;
    public String email;
}
​
Exemplo de criação de instância
import java.time.LocalDateTime;

public class Main {
    public static void main(String[] args) {
        UserProps props = new UserProps();
        props.name = "Augusto César";
        props.email = "augusto@example.com";

        User user = new User(props, null, null, null);

        System.out.println("ID: " + user.getId());
        System.out.println("CreatedAt: " + user.getCreatedAt());
        System.out.println("UpdatedAt: " + user.getUpdatedAt());

        System.out.println("Name: " + user.getName());
        user.setName("Augusto C.");
        System.out.println("Name atualizado: " + user.getName());
        System.out.println("UpdatedAt após update: " + user.getUpdatedAt());
    }
}