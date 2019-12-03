<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191203113216 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE lien_person_type_session (id INT AUTO_INCREMENT NOT NULL, id_person_id INT NOT NULL, id_type_session_id INT NOT NULL, INDEX IDX_8D591A18A14E0760 (id_person_id), INDEX IDX_8D591A189562F972 (id_type_session_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_session (id INT AUTO_INCREMENT NOT NULL, day VARCHAR(255) NOT NULL, time TIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE lien_person_type_session ADD CONSTRAINT FK_8D591A18A14E0760 FOREIGN KEY (id_person_id) REFERENCES person (id)');
        $this->addSql('ALTER TABLE lien_person_type_session ADD CONSTRAINT FK_8D591A189562F972 FOREIGN KEY (id_type_session_id) REFERENCES type_session (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE lien_person_type_session DROP FOREIGN KEY FK_8D591A189562F972');
        $this->addSql('DROP TABLE lien_person_type_session');
        $this->addSql('DROP TABLE type_session');
    }
}
